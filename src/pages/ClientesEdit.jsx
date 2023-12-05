import React, { useEffect, useState } from "react";
import ClienteAPI from "../services/ClienteAPI";
import { useNavigate, useParams } from "react-router-dom";

const ClientesEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cliente, setCliente] = useState({
    nombre: "",
    telefono: "",
    email: "",
    estado: "",
    municipio: "",
    colonia: "",
    calle: "",
    cp: "",
    latitud: "",
    longitud: "",
  });

  const [estados, setEstados] = useState([]);
  const [municipios, setMunicipios] = useState([]);

  const obtenerCliente = async () => {
    try {
      const idFinal = id.replace(":", "");
      const response = await ClienteAPI.obtenerCliente(idFinal);
      setCliente(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerEstados = async () => {
    try {
      const response = await ClienteAPI.obtenerEstados();
      setEstados(response);
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerMunicipios = async (estado) => {
    try {
      const response = await ClienteAPI.obtenerMunicipios(estado);
      setMunicipios(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerCliente();
    }
  }, []);

  useEffect(() => {
    obtenerEstados();
  }, []);

  useEffect(() => {
    if (cliente.estado) {
      obtenerMunicipios(cliente.estado);
    }
  }, [cliente.estado]);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const idFinal = id.replace(":", "");
    e.preventDefault();
    try {
      if (idFinal) {
        updateCliente();
      } else if (!idFinal) {
        insertarCliente();
      }
    } catch (error) {
      console.log(error);
    }
    console.log(cliente);
  };

  const insertarCliente = async () => {
    try {
      const response = await ClienteAPI.insertarCliente(cliente);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCliente = async () => {
    try {
      const idFinal = id.replace(":", "");
      const response = await ClienteAPI.actualizarCliente(idFinal, cliente);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-secondary bg-gradient bg-opacity-25 p-5">
      <div className="col-md-12">
        <div className="card border-0">
          <i className="bi bi-person-circle display-3"></i>
          {!id ? (
            <h5 className="card-header border-0 fs-3">Nuevo Cliente</h5>
          ) : (
            <h5 className="card-header border-0 fs-3">Editar Cliente</h5>
          )}
          <div className="card-body p-5">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={cliente.nombre}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">
                      Teléfono
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="telefono"
                      name="telefono"
                      onChange={handleChange}
                      value={cliente.telefono}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={cliente.email}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="estado" className="form-label">
                      Estado
                    </label>
                    <select
                      name="estado"
                      id="estado"
                      className="form-control"
                      value={cliente.estado}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un estado</option>
                      {estados.map((estado) => (
                        <option key={estado.id}>{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="municipio" className="form-label">
                      Municipio
                    </label>
                    <select
                      name="municipio"
                      id="municipio"
                      className="form-control"
                      disabled={!cliente.estado}
                      value={cliente.municipio}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un municipio</option>
                      {municipios.map((municipio) => (
                        <option key={municipio}>{municipio}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="colonia" className="form-label">
                  Colonia
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="colonia"
                  name="colonia"
                  onChange={handleChange}
                  value={cliente.colonia}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="calle" className="form-label">
                  Calle
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="calle"
                  name="calle"
                  onChange={handleChange}
                  value={cliente.calle}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="cp" className="form-label">
                      Código Postal
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cp"
                      name="cp"
                      onChange={handleChange}
                      value={cliente.cp}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="latitud" className="form-label">
                      Latitud
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="latitud"
                      name="latitud"
                      onChange={handleChange}
                      value={cliente.latitud}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="longitud" className="form-label">
                  Longitud
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="longitud"
                  name="longitud"
                  onChange={handleChange}
                  value={cliente.longitud}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {!id ? "Guardar" : "Editar"} Cliente{" "}
                <i className="bi bi-floppy"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientesEdit;
