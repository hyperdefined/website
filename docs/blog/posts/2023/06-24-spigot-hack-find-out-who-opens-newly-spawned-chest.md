---
title: "Spigot Hack: Find Out Who Opens Newly Spawned Chest"
description: How to use LootGenerateEvent to find out who opened a newly spawned chest.
date: 2023-08-09
categories:
  - Spigot Hacks
  - Guides
  - Coding
---

When writing ToolStats, I wanted to figure out how to tell who opens a newly spawned chest. These are chests that spawn with structures. This is a little hack I’ve come up with.

<!-- more -->

---

## Issue

My plugin, [ToolStats](https://github.com/hyperdefined/ToolStats), has a feature that will determine who finds newly spawned loot chests. I wanted to add identifiers to certain items if they spawned in loot chests. These identifiers are the player who opened the chest & the time. Getting the current time is easy, but getting who opened said chest is a bit tricky.

I first looked into how loot generates, and I found a Spigot event called [LootGenerateEvent](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/event/world/LootGenerateEvent.html). This event is perfect, as I can hook into the event and add the NBT data that I wanted to said items. However, this event does not track _who_ called said event. This event fires for any type of loot that spawns in a container. This event fires when a chest is opened.

---

## First Solution

My first initial method of doing this simply checked who had the chest opened a tick after this event was called. I can use the function `chest.getViewers().get(0)`, which will see who is currently in the inventory this loot spawns in.

```java
@EventHandler
public void onGenerateLoot(LootGenerateEvent event) {
    InventoryHolder inventoryHolder = event.getInventoryHolder();
    if (inventoryHolder == null) {
        return;
    }
    Inventory chest = inventoryHolder.getInventory();
    // Run this a tick later, as it needs time for the player to open the chest
    Bukkit.getScheduler().runTaskLater(toolStats, () -> {
        // see who has the inventory open
        Player player = (Player) chest.getViewers().get(0);
        // do a classic for loop so we keep track of chest index of items
        for (int i = 0; i < chest.getContents().length; i++) {
            ItemStack itemStack = chest.getItem(i);
            // ignore air
            if (itemStack == null || itemStack.getType() == Material.AIR) {
                continue;
            }
            // if it's an item we want, apply the lore
            String name = itemStack.getType().toString().toLowerCase(Locale.ROOT);
            for (String x: validItems) {
                if (name.contains(x)) {
                    chest.setItem(i, addLore(itemStack, player));
                }
            }
        }
    }, 1);
}
```

I remember sometime after I added this, someone reported to me an exception that was thrown. I did not save this message, but I remember it had something to do with the chest not having anyone looking into it. The plugin assumed a player was supposed to be there always, but this failed since I didn’t account for this. So instead, I had to be more creative.

---

## Second Solution

While looking into what I can access from this event, I found out I can get the location of where this loot generates. This location is the [InventoryHolder](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/inventory/InventoryHolder.html), which is the chest itself. With this, I could see who was around the chest and get the player from there. However, more than 1 player can be standing next to the chest. I can’t get the closet player since it could be wrong. Instead, I had a better idea.

Whenever a player opens a chest, I save both the block and player to a Map. Afterwards, it gets removed 1 second later. When the LootGenerateEvent event is called, it checks this Map and compares the distance between the loot location and the chest. If they are under 1 block, that means it’s the right location! I tested this, and it produces the same difference in distance each time if it's the loot chest. Here is the trick now:

```java
@EventHandler(priority = EventPriority.HIGHEST)
public void onGenerateLoot(LootGenerateEvent event) {
    InventoryHolder inventoryHolder = event.getInventoryHolder();
    if (inventoryHolder == null) {
        return;
    }
    Location lootLocation = event.getLootContext().getLocation();
    Inventory chestInv = inventoryHolder.getInventory();

    if (inventoryHolder instanceof Chest) {
        Block openedChest = null;
        // look at the current list of opened chests and get the distance
        // between the LootContext location and chest location
        // if the distance is less than 1, it's the same chest
        for (Block chest: toolStats.playerInteract.openedChests.keySet()) {
            Location chestLocation = chest.getLocation();
            // make sure it's in the same world, as a player can open a chest when loot generates
            // in another world
            if (chest.getWorld() == lootLocation.getWorld()) {
                double distance = lootLocation.distance(chestLocation);
                // see if it's the same block
                if (distance <= 1.0) {
                    openedChest = chest;
                }
            }
        }
        // ignore if the chest is not in the same location
        if (openedChest == null) {
            return;
        }

        // Run this a tick later, as it needs time for the player to open the chest
        Block finalOpenedChest = openedChest;
        Bukkit.getScheduler().runTaskLater(toolStats, () -> {
            Player player = toolStats.playerInteract.openedChests.get(finalOpenedChest);
            // do a classic for loop so we keep track of chest index of items
            for (int i = 0; i < chestInv.getContents().length; i++) {
                ItemStack itemStack = chestInv.getItem(i);
                // ignore air
                if (itemStack == null || itemStack.getType() == Material.AIR) {
                    continue;
                }
                // if it's an item we want, apply the lore
                if (ItemChecker.isValidItem(itemStack.getType())) {
                    ItemStack newItem = addLore(itemStack, player);
                    if (newItem != null) {
                        chestInv.setItem(i, newItem);
                    }
                }
            }

        }, 1);
    }
    // more code below
}
```

---

## Conclusion

I am really happy with how this system works. Ever since I used this new solution [years ago](https://github.com/hyperdefined/ToolStats/commit/61cf44a40792eebed2a798de5ab1881273ca5698), I haven't had any problems with it at all.
