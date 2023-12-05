import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/login/loginSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login);

  const cerrarSesion = () => {
    if (user) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img
                    src="https://casajovenonline.com/img/cms/logo%20casajoven.png"
                    alt="logo"
                    width="50"
                  />
                </Link>
              </li>
              {user.isLoggedIn === true ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => cerrarSesion()}
                  >
                    Cerrar sesión
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Inicio de sesión
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/cliente">
                  Clientes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ventas">
                  Ventas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
