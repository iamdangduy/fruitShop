function BlogItem(props) {
  return (
    <div className="blog-item">
      <div className="l-blog-image">
        <a href="blog-style-1-details.html">
          <img
            src="image/blog-page-1/home-1/image1.jpg"
            className="img-fluid"
            alt="image"
          />
        </a>
      </div>
      <div className="l-blog-caption">
        <span className="date">Fab 3, 2021</span>
        <h4>
          <a href="blog-style-1-details.html">{props.titleBlog}</a>
        </h4>
      </div>
    </div>
  );
}

export default BlogItem;
