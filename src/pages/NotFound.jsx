import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container-fluid text-dark bg-opacity-25 p-5">
      <div className="row">
        <div className="col-12">
          <div className="card text-center border-0">
            <h5 className="card-header bg-warning">Page Not Found</h5>
            <i className="bi bi-exclamation-triangle display-1 text-warning"></i>
            <div className="card-body">
              <h5 className="card-title mb-3">
                La página que intentas buscar no existe
              </h5>
              <div className="spinner-grow text-primary me-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary me-3" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="card-text text-center">
                Si el error perciste, por favor contacta con el administrador
              </p>
              <Link to={"/"} className="btn btn-warning">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
