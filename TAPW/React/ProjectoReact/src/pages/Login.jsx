import { Link } from "react-router-dom";

import icon_login from "../assets/icon_login.svg";

<img src={icon_login} />;

export default function Login() {
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="login-card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={icon_login} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 text-black">
                    <form>
                      <div className="logo-container">
                        <img src="../assets/icon_login.svg" className="login-card-logo" />
                      </div>

                      <h4 className="fw-normal mb-3 pb-3">
                        <strong>Sign into your account</strong>
                      </h4>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" id="login-email" className="form-control form-control-lg" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input type="password" id="login-password" className="form-control form-control-lg" />
                      </div>

                      <div className="pt-1 mb-4">
                        <button data-mdb-button-init data-mdb-ripple-init className="login-button" type="submit">
                          Login
                        </button>
                      </div>

                      <a className="login-forgot-password" href="#!">
                        Forgot password?
                      </a>
                      <p className="login-register">
                        Don't have an account?{" "}
                        <a href="#!" className="login-register-link">
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
