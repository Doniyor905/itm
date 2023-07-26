import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const Login = () => {
  const [formTabs, setFormTabs] = React.useState(1);
  const updateFormTabs = (id) => {
    setFormTabs(id);
  };
  return (
    <div className="wrapper" style={{ display: "block" }}>
      <Header />

      <div className="container-fuild">
        <div
          className="page-header"
          style={{
            backgroundImage: ` url('images/miscellaneous/page-header.png')`,
          }}
        >
          <div className="container">
            <h1 className="page-title">
              Login<span>Introduce Yourself</span>
            </h1>
          </div>
        </div>
        <nav aria-label="breadcrumb">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Login
              </li>
            </ol>
          </div>
        </nav>
      </div>

      <div className="page-area pro-content">
        <div className="container">
          <div className="row justify-content-center account-content">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="col-12  px-0">
                <ul className="nav nav-tabs" id="registerTab" role="tablist">
                  <li className="nav-item">
                    <a
                      onClick={() => updateFormTabs(1)}
                      className={formTabs === 1 ? "nav-link active" : "nav-link"}
                      id="login-tab"
                      href="#login"
                    >
                      login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => updateFormTabs(2)} className={formTabs === 2 ? "nav-link active" : "nav-link"} id="signup-tab" href="#signup">
                      Signup
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => updateFormTabs(3)} className={formTabs === 3 ? "nav-link active" : "nav-link"} id="signup-tab" href="#signup">
                      Forgot password
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="registerTabContent">
                  <div
                    className={formTabs === 1 ? "tab-pane active show fade" : "tab-pane fade"}
                    id="login"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                  >
                    <div className="registration-process">
                      <form>
                        <div className="from-group mb-3">
                          <div className="input-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup2"
                              placeholder="Enter Your Username or Email"
                            />
                          </div>
                        </div>
                        <div className="from-group mb-3">
                          <div className="input-group col-12">
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup3"
                              placeholder="Enter Your Password"
                            />
                          </div>
                        </div>
                        <div className="col-12 col-sm-12 Login-btn">
                          <button className="btn btn-secondary">Login</button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className={formTabs === 2 ? "tab-pane active show fade" : "tab-pane fade"}
                    id="signup"
                    role="tabpanel"
                    aria-labelledby="signup-tab"
                  >
                    <div className="registration-process">
                      <form>
                        <div className="from-group row mb-3">
                          <div className="input-group col-12">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Enter Your Email or Username"
                            />
                          </div>
                        </div>
                        <div className="from-group row mb-3">
                          <div className="input-group col-12">
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="inlineFormInputGroup5"
                              placeholder="Enter Your Password"
                            />
                          </div>
                        </div>

                        <div className="from-group">
                          <button className="btn btn-primary swipe-to-top">
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className={formTabs === 3 ? "tab-pane active show fade" : "tab-pane fade"}
                    id="signup"
                    role="tabpanel"
                    aria-labelledby="signup-tab"
                  >
                    <div className="registration-process">
                      <form>
                        <div className="from-group row mb-3">
                          <div className="input-group col-12">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              placeholder="Enter Your Email or Username"
                            />
                          </div>
                        </div>

                        <div className="from-group">
                          <button className="btn btn-primary swipe-to-top">
                            Create Account
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footerOne" className="footer-area footer-one footer-desktop">
        <div className="container"></div>
        <div className="container-fluid p-0">
          <div className="copyright-content">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6">
                  <div className="footer-info">
                    ©&nbsp;2019 Company, Inc. <a href="privacy.html">Privacy</a>
                    &nbsp;•&nbsp;<a href="term.html">Terms</a>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="socials">
                    <li>
                      <a href="#" className="fab fb fa-facebook-square"></a>
                    </li>
                    <li>
                      <a href="#" className="fab tw fa-twitter-square"></a>
                    </li>
                    <li>
                      <a href="#" className="fab sk fa-skype"></a>
                    </li>
                    <li>
                      <a href="#" className="fab In fa-linkedin"></a>
                    </li>
                    <li>
                      <a href="#" className="fab ig fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
