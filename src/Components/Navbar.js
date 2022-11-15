import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Context from "./store/Context";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const num = useContext(Context);
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    num.setSearch(keyword);
    let path = `/productsearch`;
    navigate(path);
  };

  return (
    <div className="Navbar">
      <header className="header-area">
        <div className="header-main-area">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header-main">
                  {/* logo start */}
                  <div className="header-element logo">
                    <Link to="/">
                      <img
                        src="image/logo1.png"
                        alt="logo-image"
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  {/* logo end */}
                  {/* search start */}
                  <div className="header-element search-wrap">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search product."
                      onChange={(e) => setKeyword(e.target.value)}
                    />
                    <a href="" className="search-btn" onClick={handleSearch}>
                      <i className="fa fa-search" />
                    </a>
                  </div>
                  {/* search end */}
                  {/* header-icon start */}
                  <div className="header-element right-block-box">
                    <ul className="shop-element">
                      <li className="side-wrap nav-toggler">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-toggle="collapse"
                          data-target="#navbarContent"
                        >
                          <span className="line" />
                        </button>
                      </li>
                      <li className="side-wrap user-wrap">
                        <div className="acc-desk">
                          <div className="user-icon">
                            <a href="account.html" className="user-icon-desk">
                              <span>
                                <i className="icon-user" />
                              </span>
                            </a>
                          </div>
                          {num.infor ? (
                            <div className="user-info">
                              <span className="acc-title">{num.infor}</span>
                              <div className="account-login">
                                <a href="/">Logout</a>
                              </div>
                            </div>
                          ) : (
                            <div className="user-info">
                              <span className="acc-title">Account</span>
                              <div className="account-login">
                                <Link to="/register">Register</Link>
                                <Link to="/login">Login</Link>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="acc-mob">
                          <a href="account.html" className="user-icon">
                            <span>
                              <i className="icon-user" />
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="side-wrap wishlist-wrap">
                        <Link to="/cart" className="header-wishlist">
                          <span className="wishlist-icon">
                            <i className="icon-handbag" />
                          </span>
                          <span className="wishlist-counter">{num.count1}</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* header-icon end */}
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom-area">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="main-menu-area">
                    <div className="main-navigation navbar-expand-xl">
                      <div className="box-header menu-close">
                        <button className="close-box" type="button">
                          <i className="ion-close-round" />
                        </button>
                      </div>
                      {/* menu start */}
                      <div className="navbar-collapse" id="navbarContent">
                        <div className="megamenu-content">
                          <div className="mainwrap">
                            <ul className="main-menu">
                              <li className="menu-link parent">
                                <Link to="index.html" className="link-title">
                                  <span className="sp-link-title">Home</span>
                                </Link>
                              </li>
                              <li className="menu-link parent">
                                <Link to="shop" className="link-title">
                                  <span className="sp-link-title">Shop</span>
                                </Link>
                              </li>
                              <li className="menu-link parent">
                                <Link to="/shop" className="link-title">
                                  <span className="sp-link-title">
                                    Collection
                                  </span>
                                </Link>
                              </li>
                              <li className="menu-link parent">
                                <Link to="/shop" className="link-title">
                                  <span className="sp-link-title">About</span>
                                </Link>
                              </li>
                              <li className="menu-link parent">
                                <Link to="blog.html" className="link-title">
                                  <span className="sp-link-title">Blogs</span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* menu end */}
                      <div className="img-hotline">
                        <div className="image-line">
                          <a href="javascript:void(0)">
                            <img
                              src="image/icon_contact.png"
                              className="img-fluid"
                              alt="image-icon"
                            />
                          </a>
                        </div>
                        <div className="image-content">
                          <span className="hot-l">Hotline:</span>
                          <span>0969 609 003</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*mini Cart start*/}

        {/*mini Cart end*/}
      </header>
    </div>
  );
}

export default Navbar;
