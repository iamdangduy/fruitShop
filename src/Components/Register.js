import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


function Register() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) alert("email khong hop le!!");
    else if (password !== repassword) alert("password khong trung khop");
    else {
      Axios.post("http://localhost:3001/api/insert", {
        customer_name: fullname,
        customer_email: email,
        customer_password: password,
      });
      alert("Success Register!!");
    }
    setFullname("");
    setEmail("");
    setPassword("");
    setRepassword("");
  };

  return (
    <div className="Register">
      <section className="section-tb-padding">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="register-area">
                <div className="register-box">
                  <h1>Create account</h1>
                  <p>Please register below account detail</p>
                  <form>
                    <input
                      value={fullname}
                      type="text"
                      name="l-name"
                      placeholder="Full Name"
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                    <input
                      value={email}
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <input
                      value={password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <input
                      value={repassword}
                      type="password"
                      name="password"
                      placeholder="Re-password"
                      onChange={(e) => {
                        setRepassword(e.target.value);
                      }}
                    />
                    <a href="" className="btn-style1" onClick={handleSubmit}>
                      Register
                    </a>
                  </form>
                </div>
                <div className="register-account">
                  <h4>Already an account holder?</h4>
                  <Link to="/login" className="ceate-a">
                    Log in
                  </Link>
                  <div className="register-info">
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
    </div>
  );
}

export default Register;
