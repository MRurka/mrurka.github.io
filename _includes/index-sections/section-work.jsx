
<section id="work-section" class="work content page-template-grid">
  {% for post in site.categories.portfolio %}
    <div id="{{ post.port-id }}" class="item-background" style={ myStyle_{{ post.port-id }} }></div>
  {% endfor %}
  <div class="container">
    <div class="items">
      {% for post in site.categories.portfolio %}
        <div id="{{ post.port-id }}" class="item">
          <a href="{{ post.url }}" rel="modal:open" style={ myStyle_{{ post.port-id }} }>
            <h1 class="title {{ post.text-dark-light }}">{{ post.title }}</h1>
          </a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
