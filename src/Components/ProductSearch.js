import Context from "./store/Context";
import { useContext, useEffect, useState } from "react";
import Axios from "axios";

function ProductSearch() {
  const searchContext = useContext(Context);
  const [productSearch, setProductSearch] = useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/api/search", {
      customer_search: searchContext.search,
    }).then((response) => {
      setProductSearch(response.data);
    });
  }, [searchContext.search]);

  return (
    <div className="ProductSearch">
      <section className="section-tb-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <div className="all-filter">
                <div className="categories-page-filter">
                  <h4 className="filter-title">Categories</h4>
                  <a
                    href="#category-filter"
                    data-bs-toggle="collapse"
                    className="filter-link"
                  >
                    <span>Categories</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="all-option collapse" id="category-filter">
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Baker's rack <span className="grid-items">(4)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Bestseller<span className="grid-items">(6)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Breakfast <span className="grid-items">(8)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Dairy &amp; chesse{" "}
                        <span className="grid-items">(7)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Dairy &amp; chesse{" "}
                        <span className="grid-items">(3)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Deal collection <span className="grid-items">(10)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Dinner <span className="grid-items">(12)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Featured product{" "}
                        <span className="grid-items">(11)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Fresh fruits <span className="grid-items">(16)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Fresh meat <span className="grid-items">(18)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Fresh vegetable <span className="grid-items">(16)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Green seafood <span className="grid-items">(12)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Lunch <span className="grid-items">(14)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        New product <span className="grid-items">(20)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Organic dryfruit{" "}
                        <span className="grid-items">(21)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Organic juice <span className="grid-items">(23)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Organic wine <span className="grid-items">(17)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Sea &amp; fish <span className="grid-items">(1)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Special product <span className="grid-items">(5)</span>
                      </a>
                    </li>
                    <li className="grid-list-option">
                      <input type="checkbox" />
                      <a href="javascript:void(0)">
                        Starters <span className="grid-items">(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="price-filter">
                  <h4 className="filter-title">Filter by price</h4>
                  <a
                    href="#price-filter"
                    data-bs-toggle="collapse"
                    className="filter-link"
                  >
                    <span>Filter by price</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="all-price collapse" id="price-filter">
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>0-100</label>
                    </li>
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>100-200</label>
                    </li>
                    <li className="f-price">
                      <input type="checkbox" />
                      <label>200-300</label>
                    </li>
                  </ul>
                </div>
                <div className="pro-size">
                  <h4 className="filter-title">Filter by size</h4>
                  <a
                    href="#size-filter"
                    data-bs-toggle="collapse"
                    className="filter-link"
                  >
                    <span>Filter by size</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="all-size collapse" id="size-filter">
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>10kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>10ltr</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>1kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>1ltr</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>2kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>3kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>5kg</label>
                    </li>
                    <li className="choice-size">
                      <input type="checkbox" />
                      <label>5ltr</label>
                    </li>
                  </ul>
                </div>
                <div className="filter-tag">
                  <h4 className="filter-title">Filter by tags</h4>
                  <a
                    href="#tags-filter"
                    data-bs-toggle="collapse"
                    className="filter-link"
                  >
                    <span>Filter by tags</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="all-tag collapse" id="tags-filter">
                    <li className="tag">
                      <a href="product.html">Almond</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Banana</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Bitrrot</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Blackberry</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Chikoo</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Coconet</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Guava</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">juice</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Ladiesfinger</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Litchi</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Minirrot</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Mussel</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Onion</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Organic-food</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Potato</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Shrimp</a>
                    </li>
                    <li className="tag">
                      <a href="product.html">Tomato</a>
                    </li>
                  </ul>
                </div>
                <div className="vendor-filter">
                  <h4 className="filter-title">Filter by vendor</h4>
                  <a
                    href="#vendor"
                    data-bs-toggle="collapse"
                    className="filter-link"
                  >
                    <span>Filter by vendor</span>
                    <i className="fa fa-angle-down" />
                  </a>
                  <ul className="all-vendor collapse" id="vendor">
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Fargglad</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Flisat</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Kyrre</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Lustigt</label>
                    </li>
                    <li className="f-vendor">
                      <input type="checkbox" />
                      <label>Sundvik</label>
                    </li>
                  </ul>
                </div>
                <div className="filter-banner">
                  <a href="grid-list.html" className="grid-banner">
                    <img
                      src="image/grid-banner.jpg"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div
                className="grid-list-banner"
                style={{ backgroundImage: "url(image/slider17.jpg)" }}
              >
                <div className="grid-banner-content">
                  <h4>Bestseller</h4>
                  <p>
                    Praesent dapibus, neque id cursus Ucibus, tortor neque
                    egestas augue, eu vulputate magna eros eu erat. Aliquam erat
                    volutpat. Nam dui mi, tincidunt quis, facilisis luc...
                  </p>
                </div>
              </div>
              <div className="grid-list-area">
                <div className="grid-list-select">
                  <ul className="grid-list">
                    <li className="colloction-icn">
                      <a href="grid-list-2.html">
                        <i className="ti-layout-list-thumb" />
                      </a>
                    </li>
                    <li className="colloction-icn">
                      <a href="grid-list-3.html">
                        <i className="ti-layout-grid2" />
                      </a>
                    </li>
                    <li className="colloction-icn three-grid">
                      <a href="grid-list.html" className="active">
                        <i className="ti-layout-grid3" />
                      </a>
                    </li>
                    <li className="colloction-icn four-grid">
                      <a href="grid-list-4.html">
                        <i className="ti-layout-grid4" />
                      </a>
                    </li>
                  </ul>
                  <ul className="grid-list-selector">
                    <li>
                      <label>Sort by</label>
                      <select>
                        <option>Featured</option>
                        <option>Best selling</option>
                        <option>Alphabetically,A-Z</option>
                        <option>Alphabetically,Z-A</option>
                        <option>Price, low to high</option>
                        <option>Price, high to low</option>
                        <option>Date new to old</option>
                        <option>Date old to new</option>
                      </select>
                    </li>
                  </ul>
                </div>
                <div className="grid-pro">
                  <ul className="grid-product">
                    {productSearch.map((elemet, index) => {
                      return (
                        <li key={index} className="grid-items">
                          <div className="tred-pro">
                            <div className="tr-pro-img">
                              <a href="product.html">
                                <img
                                  className="img-fluid"
                                  src={`image/pro/${elemet.product_image}.jpg`}
                                  alt="pro-img1"
                                />
                                <img
                                  className="img-fluid additional-image"
                                  src={`image/pro/${elemet.product_imagezoom}.jpg`}
                                  alt="additional image"
                                />
                              </a>
                            </div>
                            <div className="Pro-lable">
                              <span className="p-text">New</span>
                            </div>
                            <div className="pro-icn">
                              <a
                                href="javascript:void(0)"
                                onClick={() => searchContext.handleSubmitCart()}
                                className="w-c-q-icn"
                              >
                                <i
                                  onClick={() => {
                                    searchContext.getItem(index, productSearch);
                                  }}
                                  className="fa fa-shopping-bag"
                                />
                              </a>
                              <a
                                href="javascript:void(0)"
                                className="w-c-q-icn"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i className="fa fa-eye" />
                              </a>
                            </div>
                          </div>
                          <div className="caption">
                            <h3>
                              <a href="product.html">{elemet.product_name}</a>
                            </h3>
                            <div className="rating">
                              <i className="fa fa-star e-star" />
                              <i className="fa fa-star e-star" />
                              <i className="fa fa-star e-star" />
                              <i className="fa fa-star e-star" />
                              <i className="fa fa-star e-star" />
                            </div>
                            <div className="pro-price">
                              <span className="new-price">
                                ${elemet.product_price} USD
                              </span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="list-all-page">
                <span className="page-title">Showing 1 - 17 of 17 result</span>
                <div className="page-number">
                  <a href="grid-list.html" className="active">
                    1
                  </a>
                  <a href="grid-list-2.html">2</a>
                  <a href="grid-list-3.html">3</a>
                  <a href="grid-list-4.html">4</a>
                  <a href="javascript:void(0)">
                    <i className="fa fa-angle-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductSearch;
