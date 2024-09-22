---
layout: default
title: "Blog"
description: "Random typings of a dumb wolf. Typing with paws is hard, you know?"
permalink: /blog/
pagination:
  enabled: true
---
Random typings of a dumb wolf. Typing with paws is hard, you know? I wil try to keep posting and updating here, but no promises! Expect the most random posts.

{% for post in paginator.posts %}
    {% include post-item.html %}
{% endfor %}
{% if paginator.total_pages > 1 %}
  <div class="navigation">
  {% if paginator.previous_page %}
  <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}">
    <button>&larr; Newer Posts</button>
  </a>
  {% endif %}
  {% if paginator.next_page %}
  <a href="{{ paginator.next_page_path | prepend: site.baseurl }}">
    <button>Older Posts	&rarr;</button>
  </a>
  </div>
  {% endif %}
{% endif %}