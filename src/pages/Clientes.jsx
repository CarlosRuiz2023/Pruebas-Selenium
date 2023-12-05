// Clientes.js
import React, { useState, useEffect } from "react";
import ClienteAPI from "../services/ClienteAPI";
import { Link, useNavigate } from "react-router-dom";

const Clientes = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);

  const obtenerClientes = async () => {
    const response = await ClienteAPI.obtenerClientes();
    setClientes(response);
  };

  useEffect(() => {
    obtenerClientes();
  }, []);

  const handleEliminarCliente = async (id) => {
    await ClienteAPI.eliminarCliente(id);
    setClientes(clientes.filter((cliente) => cliente.id !== id));
  };

  const handleEditarCliente = async (id) => {
    navigate(`/cliente/:${id}`);
  };

  return (
    <div className="bg-secondary bg-gradient bg-opacity-25 p-3">
      <div className="col-md-12">
        <div className="col-md-2 offset-md-10">
          <Link className="btn btn-success fw-bold" to={`/cliente/nuevo`}>
            <i className="bi bi-plus-circle fs-5"></i> Nuevo Cliente
          </Link>
        </div>
      </div>
      <div className="card border-0 m-3">
        <h5 className="card-header border-0 bg-primary text-white">
          Listado de clientes
        </h5>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Municipio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id_cliente}>
                  <td>
                    <i className="bi bi-person-circle display-5 text-secondary"></i>
                  </td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.estado}</td>
                  <td>{cliente.municipio}</td>
                  <td>
                    <button
                      className="btn btn-danger me-3"
                      onClick={() => handleEliminarCliente(cliente.id_cliente)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditarCliente(cliente.id_cliente)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
