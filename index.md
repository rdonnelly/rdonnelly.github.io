---
layout: page
title: Ryan Donnelly | Developer & Designer
---

## Hey There

I'm Ryan.

I'm a developer and designer living in [Ann Arbor](https://en.wikipedia.org/wiki/Ann_Arbor,_Michigan). I really enjoy [ultimate frisbee](https://annarborultimate.org), [music](https://music.apple.com/profile/rdonnelly), board games, and travel. If you'd like to know more, [check out my about page](/about) or [send me an email](mailto:ryanjdonnelly@gmail.com).

---

## Latest Blog Entry

{% assign post = site.posts.first %}
{{ post.title }}

{{ post.description | remove: '<p>' | remove: '</p>' }}
[Continue Reading&nbsp;&rarr;]({{ post.url | prepend: site.baseurl }})
