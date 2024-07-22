---
title: "Hunting Down cobalt Instances"
description: How I discovered and tracked a bunch of cobalt instances for fun.
date: 2024-05-03
categories:
  - Guides
  - Fun
image: assets/img/posts/hunting-down-cobalt-instances/1.png
---

[cobalt](https://github.com/wukko/cobalt), if you don't know, is an awesome social media content downloader. You all know those wonderful "youtube to mp3 no virus plz" sites. They are full of ads and tracking. That's where cobalt comes in. It supports a _ton_ of different social media sites to download content.

Since cobalt is open source, anyone can grab the code and host their own instance. However, there is an official instance located at [cobalt.tools](https://cobalt.tools). A few months ago, there was a small list floating around in the cobalt Discord of community instances. These were ones run by anyone and for fun. I decided to make a tracker for these instances.

<!-- more -->

---

## Instance Tracker

In August of 2023, I jankly wrote up some code to pull data from a list of cobalt instances and display it on a table. cobalt contains 2 parts: an API and frontend. The API has a wonderful route located at `/api/serverInfo` to record the version, commit, branch, etc. My tracker pulled this information to display in a table. This is what it first looked like:

![image1][image1]{ loading=lazy }

I eventually made the site better and better overtime. However, I wanted to see if I could locate more instances out there in the wild that were not submitted to me. Let's see if I can do it! The ones above were only posted in the Discord, and I figured there were more out in the wild.

---

## The Hunt Starts

I first went to [Shodan](https://www.shodan.io/) to see if I can find any. I didn't know what to search at first. I ended up just searching `cobalt.tools` and found some hits of around 3 instances. I already knew Shodan didn't work too well, so I gave up. There can't be only a few out there, there has to be more.

Sometime afterwards, I found this amazing wonderful site: [Censys Search](https://search.censys.io/). It's another open scanner that you can search. Remembering my failed search previously, I decided to search. And oh boy, I found a lot.

<figure markdown="span">
    ![image2][image2]{ loading=lazy }
</figure>
<figure markdown="span">
    ![image3][image3]{ loading=lazy }
</figure>

## Search Queries

Censys has a great search function. There's a ton of different things you can search by. Looking at the frontend of cobalt, I decided to search for any pages containing the word `cobalt`. This would lead to a lot of websites, so I decided to search for just the title instead. The title of the frontend is just simply `cobalt`. This is the query I used:

```
services.http.response.html_title: "cobalt"
```

I found a great chunk of instances to start with from this. However, these were only the frontend instances. On all frontend instances, I made sure to use it and see what API it sends the request to. I used my browser's network feature to see where it sends the POST request to. Some sent them to `co.wuk.sh`, which is the official API instance. However, some sent them to either a domain or the same IP address but a different port.

With these random IPs, I wanted to find out if there was a domain connected to them. To find that out, Censys Search shows if there are any domains connected to that IP. I was able to find most domains using this method. I also did a reverse query search on [SecurityTrails](https://securitytrails.com/) of the IP and did some guessing of common names. I also looked at the `/api/serverInfo` endpoint, as there is a `url` string in the JSON it returns. This URL is the API URL. I compiled a list and published it to the cobalt Discord.

cobalt by default in its `docker-compose.yml` exposes ports 9000 and 9001. One is for the frontend, and the other is for the API. You could use these ports to search as well, but I've seen a lot of different ports. 9000 is a very common port, so you will get a lot of random services online. Most users probably won't change what interface the ports are bound to. The 2 ports cobalt uses are bound to `0.0.0.0`, which means it's public.

## Finding API Instances

There was a small issue with the query I used above. What if there were API instances with no frontend alongside it? That's where this query comes in:

```
services.http.response.body_hash="sha1:bf53b9ab96065ed263df9ebcd2b3b0c4d88242b5"
```

!!! info "Note"
    The query listed above does not work anymore. cobalt has changed how the root of the API is served, as it redirects to `/api/serverInfo`, which makes the hash not work. Each `/api/serverInfo` will be different as it has the start time.

    Instead, you can query using `services.http.request.uri: "api/serverInfo"` to see current ones. Censys Search will track redirects, and hitting the root of the API will redirect.

    I'm keeping the query above just for history reasons.

With Censys Search, you can search the hash of the content a website returns. Since the API (on the root endpoint) redirects to `/api/json`, Censys Search was able to see that redirect and record it. That endpoint displays the same JSON _every_ time. That means I can use the hash it returns to find any other open instances. Since the hash does not change, this means anything it finds is 100% cobalt instances!

<figure markdown="span">
    ![image4][image4]{ loading=lazy }
</figure>

After I made this discovery, I found even more countless instances. Using my domain searching tricks above, I had a growing list of instances.

---

## New Instance Tracker

My [instance tracker](https://instances.hyper.lol) now has well over 50 instances being tracked. Since I added them, I redesigned the site and even added a scoring system to determine how "good" an instance is by the percentage of media it can download. If it's at 100%, it passed all tests. However, some services need cookies and extra information attached to download the media. Region locking is also a problem as well. This list can be used if the main cobalt instance is blocked for a service.

---

## Conclusion

I had a lot of fun doing this, and it made me work on my instance tracker more and give it the love it needed. I now often use the searches above to find any new instances that pop up every so often.

[image1]: ../../../assets/img/posts/hunting-down-cobalt-instances/1.png "screenshot of a table listing the current cobalt instances I knew"
[image2]: ../../../assets/img/posts/hunting-down-cobalt-instances/2.png "screenshot of discord messages by me, stating I found a bunch of cobalt instances"
[image3]: ../../../assets/img/posts/hunting-down-cobalt-instances/3.png "screenshot of discord messages by me and lostdusty, talking about me finding cobalt instances"
[image4]: ../../../assets/img/posts/hunting-down-cobalt-instances/4.png "screenshot of a table listing the current cobalt instances I knew"