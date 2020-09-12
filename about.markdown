---
layout: default
title: /about
permalink: /about
---
{% assign dateOfBirth = "July 21, 1994" | date:'%s' %}
{% assign timeAtUpdate = 'now' | date: '%s' %}
{% assign ageSeconds = timeAtUpdate | minus: dateOfBirth %}
{% assign secYear = 365.25 | times: 24 | times: 60 | times: 60 %}
{% assign ageYears = ageSeconds | divided_by: secYear %}

# /leland_rolofson

<img class=headshot src="/assets/images/headshot.jpg" align="right" width="20%" alt="Leland's Face">

This is Leland. You can call him Lee if you prefer monosyllabic names.

{{ ageYears | round }} years old. Huge dork. Mostly harmless. Mediocre at lots of things, including:

* tinkering with computers and other electronics
* video games like:
    * rocket soccer
    * factorio
    * anything by zachtronics
* Growing plants

<br>

# /site

I'm a blog. I'm composed in [markdown](https://tools.ietf.org/html/rfc7763) and use
[jekyll](https://jekyllrb.com) to turn it into pretty HTML.
