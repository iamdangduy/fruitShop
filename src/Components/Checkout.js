import { useContext, useState } from "react";
import Context from "./store/Context";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const cartItem = useContext(Context);
  
  const [total, setTotal] = useState(0);
  const newArr = [];
  return (
    <div className="Checkout">
      <section className="section-tb-padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="checkout-area">
                <div className="billing-area">
                  <form>
                    <h2>Billing details</h2>
                    <div className="billing-form">
                      <ul className="billing-ul input-2">
                        <li className="billing-li">
                          <label>First name</label>
                          <input
                            type="text"
                            name="f-name"
                            placeholder="First name"
                          />
                        </li>
                        <li className="billing-li">
                          <label>Last name</label>
                          <input
                            type="text"
                            name="l-name"
                            placeholder="Last name"
                          />
                        </li>
                      </ul>
                      <ul className="billing-ul"></ul>
                      <ul className="billing-ul">
                        <li className="billing-li">
                          <label>Country</label>
                          <select>
                            <option>Select a country</option>
                            <option>United country</option>
                            <option>Russia</option>
                            <option>italy</option>
                            <option>France</option>
                            <option>Ukraine</option>
                            <option>Germany</option>
                            <option>Australia</option>
                          </select>
                        </li>
                      </ul>
                      <ul className="billing-ul input-2">
                        <li className="billing-li">
                          <label>Email address</label>
                          <input
                            type="text"
                            name="mail"
                            value={cartItem.infor}
                          />
                        </li>
                        <li className="billing-li">
                          <label>Phone</label>
                          <input type="text" name="phone" placeholder="Phone" />
                        </li>
                      </ul>
                    </div>
                  </form>
                  <div className="billing-details">
                    <form>
                      <h2>Shipping details</h2>
                      <ul className="shipping-form">
                        <li className="check-box">
                          <input type="checkbox" name="--" />
                          <label>Ship to a different address?</label>
                        </li>
                        <li className="comment-area">
                          <label>Order notes(Optional)</label>
                          <textarea
                            name="comments"
                            rows={4}
                            cols={80}
                            defaultValue={""}
                          />
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
                <div className="order-area">
                  <div className="check-pro">
                    <h2>In your cart</h2>
                    <ul className="check-ul">
                      {cartItem.item.map((element, index) => {
                        return (
                          <li>
                            <div className="check-pro-img">
                              <a href="product.html">
                                <img
                                  src={`image/pro/${element.product_image}.jpg`}
                                  className="img-fluid"
                                  alt="image"
                                />
                              </a>
                            </div>
                            <div className="check-content">
                              <a href="product.html">{element.product_name}</a>
                              <span className="check-code-blod">
                                Product code: <span>CA70051541B</span>
                              </span>
                              <span className="check-price">
                                $
                                {new Intl.NumberFormat({
                                  style: "currency",
                                  currency: "JPY",
                                }).format(element.product_price * cartItem.item[index].amount)}
                                {/* {} */}
                              </span>
                            </div>
                            {newArr.push(element.product_price * cartItem.item[index].amount)}
                          </li>
                        );
                      })}
                      {/* <li>
                        <div className="check-pro-img">
                          <a href="product.html">
                            <img
                              src="image/pro-page-image/check-image-2.jpg"
                              className="img-fluid"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="check-content">
                          <a href="product.html">Fresh healthy food</a>
                          <span className="check-code-blod">
                            Product code: <span>CA70051541B</span>
                          </span>
                          <span className="check-price">$230.00</span>
                        </div>
                      </li> */}
                    </ul>
                  </div>
                  <h2>Your order</h2>
                  <ul className="order-history">
                    <li className="order-details">
                      <span>Product:</span>
                      <span>Total</span>
                    </li>
                    <li className="order-details">
                      <span>Shipping Charge:</span>
                      <span>Free shipping</span>
                    </li>
                    <li className="order-details">
                      <span>Total:</span>
                      <span>
                        $
                        {new Intl.NumberFormat({
                          style: "currency",
                          currency: "JPY",
                        }).format(
                          newArr.reduce((total, num) => {
                            return total + num;
                          }, 0)
                        )}
                      </span>
                    </li>
                  </ul>
                  <form>
                    <ul className="order-form">
                      <li>
                        <input type="checkbox" name="--" />
                        <label>Direct bank transfer</label>
                      </li>
                      <li>
                        <input type="checkbox" name="--" />
                        <label>Cheque payment</label>
                      </li>
                      <li>
                        <input type="checkbox" name="--" />
                        <label>Paypal</label>
                      </li>
                      <li className="pay-icon">
                        <a href="javascript:void(0)">
                          <i className="fa fa-credit-card" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-cc-visa" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-cc-paypal" />
                        </a>
                        <a href="javascript:void(0)">
                          <i className="fa fa-cc-mastercard" />
                        </a>
                      </li>
                    </ul>
                  </form>
                  <div className="checkout-btn">
                    <Link to="/odersuccess" className="btn-style1">
                      Place order
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
