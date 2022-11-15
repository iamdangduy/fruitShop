import { useContext, useEffect, useState } from "react";
import Context from "./store/Context";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const addCart = useContext(Context);
  const [total, setTotal] = useState(0);


  return (
    <section className="cart-page section-tb-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div className="cart-area">
              <div className="cart-details">
                <div className="cart-item">
                  <span className="cart-head">My cart:</span>
                  <span className="c-items">{addCart.item.length} items</span>
                </div>

                {/* Product Start */}
                {addCart.item.map((element, index) => {
                  return (
                    <div className="cart-all-pro" key={index}>
                      <div className="cart-pro">
                        <div className="cart-pro-image">
                          <a href="product.html">
                            <img
                              style={{ maxWidth: "150px" }}
                              src={`image/pro/${element.product_image}.jpg`}
                              className="img-fluid"
                              alt="image"
                            />
                          </a>
                        </div>
                        <div className="pro-details">
                          <h4>
                            <a href="product.html">{element.product_name}</a>
                          </h4>
                          <span className="pro-size">
                            <span className="size">Size:</span> 5kg
                          </span>
                          <span className="pro-shop">Petro-demo</span>
                          <span className="cart-pro-price">
                            $
                            {new Intl.NumberFormat({
                              style: "currency",
                              currency: "JPY",
                            }).format(element.product_price)}
                            USD
                          </span>
                        </div>
                      </div>
                      <div className="qty-item">
                        <div className="center">
                          <div className="plus-minus">
                            <span>
                              {/* handleSubtract */}
                              {element.amount > 1 && (
                                <a
                                  href="javascript:void(0)"
                                  className="minus-btn text-black"
                                  onClick={() => addCart.decreaseProduct(index)}
                                >
                                  -
                                </a>
                              )}
                              <input
                                type="text"
                                name="name"
                                value={element.amount}
                              />
                              {/* handlePlus */}
                              <a
                                href="javascript:void(0)"
                                className="plus-btn text-black"
                                onClick={() => addCart.increaseProduct(index)}
                              >
                                +
                              </a>
                            </span>
                          </div>
                          <a href="grid-list.html" className="pro-remove">
                            Remove
                          </a>
                        </div>
                      </div>
                      <div className="all-pro-price">
                        <span>
                          $
                          {new Intl.NumberFormat({
                            style: "currency",
                            currency: "JPY",
                          }).format(element.product_price * element.amount)}{" "}
                          USD
                        </span>
                      </div>
                    </div>
                  );
                })}
                {/* Product End */}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-xs-12 col-sm-12 col-md-12 col-lg-4">
            <div className="cart-total">
              <div className="cart-price">
                <span>Subtotal</span>
                {/* <span className="total">
                  $
                  USD
                </span> */}
              </div>
              <div className="cart-info">
                <h4>Shipping info</h4>
                <form>
                  <label>Country</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>---</option>
                    <option>Afghanistan</option>
                    <option>Åland Islands</option>
                    <option>Albania</option>
                    <option>Algeria</option>
                    <option>Andorra</option>
                    <option>Angola</option>
                    <option>Anguilla</option>
                    <option>Antigua &amp; Barbuda</option>
                    <option>Argentina</option>
                    <option>Armenia</option>
                    <option>Aruba</option>
                    <option>Ascension Island</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                  </select>
                  <label>Zip/postal code</label>
                  <input
                    type="text"
                    name="code"
                    placeholder="Zip/postal code"
                  />
                </form>
                <a href="javascript:void(0)" className="cart-calculate">
                  Calculate
                </a>
              </div>
              <div className="shop-total">
                {/* <span>Total</span> */}
                {/* <span className="total-amount">
                  $
                  {new Intl.NumberFormat({
                    style: "currency",
                    currency: "JPY",
                  }).format(
                    addCart.item.reduce((total, num) => {
                      return total + num.product_price;
                    }, 0)
                  )}{" "}
                  USD
                </span> */}
              </div>
              <Link to="/checkout" className="check-link">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
