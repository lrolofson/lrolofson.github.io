---
layout: page
title: /about
permalink: /about
---
{% assign dateOfBirth = "July 21, 1994" | date:'%s' %}
{% assign timeAtUpdate = 'now' | date: '%s' %}
{% assign ageSeconds = timeAtUpdate | minus: dateOfBirth %}
{% assign secYear = 365.25 | times: 24 | times: 60 | times: 60 %}
{% assign ageYears = ageSeconds | divided_by: secYear %}

{:refdef: style="text-align: center;"}
![photo of Leland](/assets/images/headshot.jpg){: width="75%" }
{: refdef}

# /leland_rolofson

This is Leland. You can call him Lee if you prefer monosyllabic names.
 
{{ ageYears | round }} years old. Huge dork. Works at a greenhouse. Likes lots of things, but likes computers and plants the most. Mostly harmless.

# /site

I'm a blog. I'm composed in [markdown](https://tools.ietf.org/html/rfc7763) and use
[jekyll](https://jekyllrb.com) to turn it into pretty HTML.
