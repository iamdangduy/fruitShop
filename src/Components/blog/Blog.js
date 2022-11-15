import BlogItem from "./BlogItem";

function Blog() {
  const PostItem = (props) => {
    return (
      <div className="blog-start">
        <div className="blog-post">
          <div className="blog-image">
            <a href="blog-style-1-details.html">
              <img src={props.image} alt="blog-image" className="img-fluid" />
            </a>
          </div>
          <div className="blog-content">
            <div className="blog-title">
              <h6>
                <a href="blog-style-1-details.html">{props.title}</a>
              </h6>
              <span className="blog-admin">
                By <span className="blog-editor">Andrew louise</span>
              </span>
            </div>
            <p className="blog-description">{props.description}</p>
            <a href="blog-style-1-details.html" className="read-link">
              <span>Read more</span>
              <i className="ti-arrow-right" />
            </a>
            <div className="blog-date-comment">
              <span className="blog-date">{props.publisAt}</span>
              <a href="javascript:void(0)">{props.countComment}</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const titles = [
    "Health and skin for your organic",
    "Organic mix masala fresh &amp; soft",
    "Fresh organics brand and picnic",
    "Vegist special liquide fresh vegetable",
    "Vegist special liquide fresh vegetable",
  ];

  return (
    <div className="Blog">
      <section className="section-tb-padding blog-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 col-12">
              <div className="left-column style-1">
                <div className="blog-search">
                  <h4>Search</h4>
                  <form>
                    <input
                      type="text"
                      name="search"
                      placeholder="Search blog"
                    />
                    <a href="javascript:void(0)">
                      <i className="fa fa-search" />
                    </a>
                  </form>
                </div>
                <div className="right-area style-1">
                  <div className="right-column-start">
                    <h4>Archive</h4>
                    <div className="archive-link">
                      <h5>February 2021</h5>
                      <ul>
                        {titles.map((element, index) => {
                          return (
                            <li key={index}>
                              <a href="blog-style-1-3-grid.html">
                                <i className="ti-arrow-right" /> {element}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-title">
                  <h4>Recent post</h4>
                </div>
                <div className="left-blog">
                  <BlogItem titleBlog="Nguyen Dang Duy" />
                  <BlogItem titleBlog="Nguyen Dang Duy" />
                  <BlogItem titleBlog="Health and ski..." />
                  <BlogItem titleBlog="Health and ski..." />
                  <BlogItem titleBlog="Green onion k..." />
                </div>
                <div className="blog-tag style-1">
                  <h4>Tags</h4>
                  <ul className="tegs">
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Freshmeat</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Garlic</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Green</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Haldi</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Indian</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Masala</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Organic</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Paper</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Tost</a>
                    </li>
                    <li className="tags-link">
                      <a href="blog-style-1-3-grid.html">Vegetable</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 col-12">
              <div className="blog-style-1-left-grid">
                <PostItem
                  image="image/blog-image/blog-1.jpg"
                  title="Green onion knife and salad plased"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="3 Jan 2021"
                  countComment="6 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-2.jpg"
                  title=" All time fresh every time healthy"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="5 Jan 2021"
                  countComment="0 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-3.jpg"
                  title="Vegist special liquide fresh vagi"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="7 Jan 2021"
                  countComment="0 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-4.jpg"
                  title="Organic mix masala fresh &amp; soft"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="9 Jan 2021"
                  countComment="1 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-5.jpg"
                  title="Fresh organics brand and picnic"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="10 Jan 2021"
                  countComment="1 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-6.jpg"
                  title="Health and skin for your organic"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="12 Jan 2021"
                  countComment="3 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-7.jpg"
                  title="Vegist special liquide fresh vegetable"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="15 Jan 2021"
                  countComment="4 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-1.jpg"
                  title="Green onion knife and salad plased"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="19 Jan 2021"
                  countComment="6 Comment"
                />
                <PostItem
                  image="image/blog-image/blog-2.jpg"
                  title="Fresh organics brand and picnic"
                  description="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the..."
                  publisAt="20 Jan 2021"
                  countComment="0 Comment"
                />
              </div>
            </div>
          </div>
          <div className="all-page">
            <span className="page-title">Showing 1 - 5 of 6 result</span>
            <div className="page-number style-1">
              <a href="javascript:void(0)" className="active">
                1
              </a>
              <a href="javascript:void(0)">2</a>
              <a href="javascript:void(0)">3</a>
              <a href="javascript:void(0)">4</a>
              <a href="javascript:void(0)">5</a>
              <a href="javascript:void(0)">
                <i className="fa fa-angle-double-right" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
