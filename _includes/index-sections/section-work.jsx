
<section id="work-section" className="work site-section-content page-template-grid">
  {% for post in site.categories.portfolio %}
    <div id="{{ post.port-id }}" className="item-background" style={ backgroundImageDesktop_{{ post.port-id }} }></div>
  {% endfor %}
  <div className="container">
    <div className="items">
      {% for post in site.categories.portfolio %}
        <div id="{{ post.port-id }}" className="item">
          <Link to="/{{ post.path }}" style={ backgroundImageMobile_{{ post.port-id }} }>
            <h1 className="title {{ post.text-dark-light }}">{{ post.title }}</h1>
          </Link>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
