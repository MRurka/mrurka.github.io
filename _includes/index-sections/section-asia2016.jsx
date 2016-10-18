
<section className="blog content page-template-list">
  <div className="container">
    <div className="items">
      {% for post in site.categories.asia2016 %}
          <div className="item">
            <Link to="/{{ post.path }}">
              <h1 className="title">{{ post.title }}</h1>
              <h2 className="subtitle">{{ post.subtitle }}</h2>
            </Link>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
