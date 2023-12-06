import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/login/loginSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  };

  const iniciarSesion = () => {
    if (user.username === "admin" && user.password === "admin") {
      dispatch(login(user));
      navigate("/cliente");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="row align-items-center">
        <div className="col-md-12">
          <div className="card text-center border-0">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="card-body">
                  <i className="bi bi-person-circle display-1 text-primary"></i>
                  <h3 className="card-title mb-5 text-primary">
                    Inicio de Sesión
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-floating border border-primary rounded">
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={user.username}
                      />
                      <label>Nombre de usuario</label>
                    </div>
                    <div className="mb-3 form-floating border border-primary rounded">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={user.password}
                      />
                      <label>Contraseña</label>
                    </div>
                    <div className="mb-3 form-group">
                      <input
                        type="checkbox"
                        className="form-check-input me-3"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">
                        Recordar mis datos
                      </label>
                    </div>
                    <button
                      name="loginButton"
                      id="loginButton"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Iniciar sesión
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
