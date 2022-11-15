import { useContext } from "react";
import Context from "./store/Context";

function OderSuccess() {
  const product = useContext(Context);

  return (
    <div className="OderSuccess">
      <div className="order-area">
        <div className="order-details">
          <span className="text-success order-i">
            <i className="fa fa-check-circle" />
          </span>
          <h4>Thank you for order</h4>
          <span className="order-s">Your order will ship within few hours</span>
        </div>
        <section className="order-histry-area section-tb-padding">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="order-history">
                  <div className="profile">
                    <div className="order-pro">
                      <div className="pro-img">
                        <a href="javascript:void(0)">
                          <img
                            src="image/user-ava.jpg"
                            alt="img"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="order-name">
                        <h4>{product.infor}</h4>
                        <span>Joined April 06, 2021</span>
                      </div>
                    </div>
                    <div className="order-his-page">
                      <ul className="profile-ul">
                        <li className="profile-li">
                          <a href="pro-wishlist.html" className="active">
                            <span>Wishlist</span>
                            <span className="pro-count">
                              {product.item.length}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="profile-wishlist">
                    <div className="wishlist-area">
                      <div className="wishlist-details">
                        <div className="wishlist-item">
                          <span className="wishlist-head">Your oder:</span>
                          <span className="wishlist-items">
                            {product.item.length} item
                          </span>
                        </div>
                        {product.item.map((element, index) => {
                          return (
                            <div className="wishlist-area">
                              <div className="wishlist-details">
                                <div className="wishlist-all-pro">
                                  <div className="wishlist-pro">
                                    <div className="wishlist-pro-image">
                                      <a href="product.html">
                                        <img
                                          src={`image/pro/${element.product_image}.jpg`}
                                          className="img-fluid"
                                          alt="image"
                                          style={{ maxWidth: "150px" }}
                                        />
                                      </a>
                                    </div>
                                    <div className="pro-details">
                                      <h4>
                                        <a href="product.html">
                                          {element.product_name}
                                        </a>
                                      </h4>
                                      <span className="all-size">
                                        Size:{" "}
                                        <span className="pro-size">6kg</span>
                                      </span>
                                    </div>
                                  </div>
                                  {/* <div className="all-pro-price">
                                    <span className="new-price">
                                      ${element.product_price} USD
                                    </span>
                                    <span className="old-price">
                                      <del>$400.00 USD</del>
                                    </span>
                                  </div> */}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="order-delivery mb-4">
          <ul className="delivery-payment">
            <li className="delivery">
              <h5>Delivery address</h5>
            </li>
            <li className="pay">
              <h5>Payment summary</h5>
              <span className="order-span p-label">
                <span className="n-price">Price</span>
                <span className="o-price">
                  $
                  {new Intl.NumberFormat({
                    style: "currency",
                    currency: "JPY",
                  }).format(
                    product.item.reduce((total, num) => {
                      return total + num.product_price;
                    }, 0)
                  )}
                </span>
              </span>
              <span className="order-span p-label">
                <span className="n-price">Shipping charge</span>
                <span className="o-price">$0</span>
              </span>
              <span className="order-span p-label">
                <span className="n-price">Order Total</span>
                <span className="o-price">
                  $
                  {new Intl.NumberFormat({
                    style: "currency",
                    currency: "JPY",
                  }).format(
                    product.item.reduce((total, num) => {
                      return total + num.product_price;
                    }, 0)
                  )}
                </span>
              </span>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default OderSuccess;
