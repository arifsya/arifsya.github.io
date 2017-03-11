---
layout:	indexed
---

<div class="ui grey inverted vertical segment">
      <div class="ui stackable center aligned page grid">
        <div class="row">
          <div class="column">
            <div class="ui inverted horizontal divider"><i class="fa fa-empire" style="font-size:5em;"></i></div>
          </div>
        </div>
        <div class="row">
          <div class="twelve wide column">
    {% for post in site.posts reserved limit:3 %}
            <div class="ui segment divided items left aligned">
              <div class="item">
                <div class="content">
                  <h3><a href="{{ post.url | prepend: site.baseurl }}" class="header">{{ post.title }}</a></h3>
                  <div class="meta">
                    <div class="cinema"><i class="fa fa-calendar"></i> {{ post.date | date: "%-d %b %Y" }} <i class="fa fa-clock-o"></i> {{ post.date | date: "%H:%M" }}</div>
                  </div>
                  <div class="ui horizontal divider"><i class="fa fa-database" style="font-size: 2em;"></i></div>
                  <div class="description">
                    <p>{{ post.excerpt }}</p>
                  </div>
                  <div class="extra">
                    <a href="{{ post.url | prepend: site.baseurl }}" class="ui right floated primary button">
                      Read More
                    </a>
                    {% for tags in post.tags %}
                    <div class="ui label"><i class="fa fa-tag"></i> {{ tags }}</div>
                    {% endfor %}
                  </div>
                </div>
              </div>
            </div>
    {% endfor %}
          <a class="huge ui blue button" href="/allpost/" target="_blank"><i class="fa fa-folder-open-o"></i></a>
        </div>
     </div>
   </div>
</div>
