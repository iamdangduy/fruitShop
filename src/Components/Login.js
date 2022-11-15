import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "./store/Context";

function Login() {
  const [emaillogin, setEmailogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [inforLogin, setInforLogin] = useState([]);
  const getInfor = useContext(Context);

  console.log(inforLogin);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // if (emaillogin === "admin" && passwordlogin === "admin") {
    //   alert("Đăng nhập thành công!!");
    //   let path = `/register`;
    //   navigate(path);
    // }

    Axios.post("http://localhost:3001/api/login", {
      customer_emailLogin: emaillogin,
      customer_passwordLogin: passwordlogin,
    }).then((response) => {
      setInforLogin(response.data);
    });
  };

  useEffect(() => {
    if (
      inforLogin.some(
        (item) =>
          item.customer_email === emaillogin &&
          item.customer_password === passwordlogin
      )
      ) {
        let path = `/shop`;
        navigate(path);
        getInfor.setInfor(emaillogin);
    }
  }, [inforLogin]);

  return (
    <section className="section-tb-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="login-area">
              <div className="login-box">
                <h1>Login</h1>
                <p>Please login below account detail</p>
                <form>
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmailogin(e.target.value);
                    }}
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPasswordlogin(e.target.value);
                    }}
                  />
                  <a href="" className="btn-style1" onClick={handleLogin}>
                    Sign in
                  </a>
                  <a href="forgot-password.html" className="re-password">
                    Forgot your password?
                  </a>
                </form>
              </div>
              <div className="login-account">
                <h4>Don't have an account?</h4>
                <Link to="/register" className="ceate-a">
                  Create account
                </Link>
                <div className="login-info">
                  <a href="terms-conditions.html" className="terms-link">
                    <span>*</span> Terms &amp; conditions.
                  </a>
                  <p>
                    Your privacy and security are important to us. For more
                    information on how we use your data read our{" "}
                    <a href="privacy-policy.html">privacy policy</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
