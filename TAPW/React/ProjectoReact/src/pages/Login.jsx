import { Link, useNavigate } from "react-router-dom";
import icon_login from "../assets/icon_login.svg";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

<img src={icon_login} />;

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  async function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      await login(data);
      navigate("/", { state: { message: "Login succesful!" } });
      window.location.reload();
    } catch (error) {
      alert("Login failed:" + error);
    }
  }

  return (
    <>
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
                    <form onSubmit={handleLogin} action={"/backend"}>
                      <h4 className="fw-normal mb-3 pb-3">
                        <strong>Sign into your account</strong>
                      </h4>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label">Email address</label>
                        <input name="email" type="email" id="login-email" className="form-control form-control-lg" />
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label">Password</label>
                        <input name="password" type="password" id="login-password" className="form-control form-control-lg" />
                      </div>

                      <div className="pt-1 mb-4">
                        <button data-mdb-button-init data-mdb-ripple-init className="login-button" type="submit">
                          Login
                        </button>
                      </div>
                      <p className="login-register">
                        Don't have an account?{" "}
                        <Link to="/register" className="login-register-link">
                          Register here
                        </Link>
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
