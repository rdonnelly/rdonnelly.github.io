---
layout: page
title: Home
---

## Hey There.

I'm Ryan.

I'm a developer and designer living in [Ann Arbor](https://en.wikipedia.org/wiki/Ann_Arbor,_Michigan). I currently work at [NewFoundry](http://newfoundry.com). I really enjoy [ultimate frisbee](https://annarborultimate.org), music, and a [good burrito](http://pancheros.com). If you'd like to know more, [check out my about page](/about) or [send me an email](mailto:ryanjdonnelly@gmail.com).

<br />

---

<br />

## Latest Blog Entry

{% assign post = site.posts.first %}
{{ post.title }}

{{ post.description | remove: '<p>' | remove: '</p>' }}
[Continue Reading&nbsp;&rarr;]({{ post.url | prepend: site.baseurl }})  
