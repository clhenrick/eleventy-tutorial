---
title: Hello Eleventy!
layout: default
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---

Hello Universe!!!

## Check out some blog posts

{%- for blog in blogs %}
- [{{blog.data.title}}]({{blog.url}}) by {{blog.data.author}}
{%- endfor %}


<a href="{{pagination.href.previous}}">Previous</a>
<a href="{{pagination.href.next}}">Next</a>