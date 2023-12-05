import React, { useEffect, useState } from "react";
import VentasAPI from "../services/VentasAPI";

const Ventas = () => {
  const [ventas, setVentas] = useState([]);

  const obtenerVentas = async () => {
    const response = await VentasAPI.obtenerVentas();
    setVentas(response);
  };

  useEffect(() => {
    obtenerVentas();
  }, []);

  return (
    <div className="bg-secondary bg-gradient bg-opacity-25 p-3">
      <div className="card border-0 m-3">
        <h5 className="card-header border-0 bg-primary text-white">
          Listado de ventas
        </h5>
        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Folio</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.id_venta}</td>
                  <td>{venta.fecha}</td>
                  <td>{venta.nombre}</td>
                  <td>
                    <i className="bi bi-currency-dollar"></i>
                    {venta.total}
                  </td>
                  <td>
                    <button className="btn btn-info">
                      <i className="bi bi-eye-fill"></i>
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

export default Ventas;
