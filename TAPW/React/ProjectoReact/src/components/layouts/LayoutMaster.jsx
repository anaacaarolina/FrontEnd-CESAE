import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/icon_navbar.svg";
import "../../App.css";

<img src={logo} />;

export default function LayoutMaster() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/menu" className="nav-link">
                    Menu
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/manager" className="nav-link">
                    Manager
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/kitchen" className="nav-link">
                    Kitchen
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/order" className="nav-link">
                    Place Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />

      <footer className="bg-body-tertiary text-center text-lg-start">
        <div className="text-center p-3">© 2025 Copyright: Carolina Pinto</div>
        <div className="text-center p-3">
          {" "}
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
          </Link>
        </div>
      </footer>
    </>
  );
}
