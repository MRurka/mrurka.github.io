
<section className="blog content page-template-list">
  <div className="container">
    <div className="items">
      {% for post in site.categories.blog %}
          <div className="item">
            <a href="{{ post.url }}" rel="modal:open">
              <h1 className="title">{{ post.title }}</h1>
              <h2 className="subtitle">{{ post.subtitle }}</h2>
            </a>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
