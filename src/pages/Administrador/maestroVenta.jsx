import React from "react";

import { Link } from "react-router-dom";

const maestroVenta = () => {
  return (
    <div>
      <div className="sell-report">
        <h1 id="reporte-title">Reporte de ventas</h1>
        <div className="top-table-sell">
          Cliente:
          <div className="search-bar-sell">
            <input placeholder="Buscar: Cliente ID/Nombre" className="search" />
            <button>
              <i className="fas fa-search"></i>Buscar
            </button>
          </div>
          <div className="new-sell">
            <Link to="/administrador/registroventa" className="new-sell-link">
              <i className="fas fa-plus"></i> Nueva Venta
            </Link>
          </div>
          <button className="new-pdf">
            Generar PDF
            <i className="far fa-file-pdf"></i>
          </button>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Venta ID</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Vendedor</th>
              <th>Valor Venta</th>
              <th>Entregado</th>
              <th colSpan="3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>71728</td>
              <td>30/09/2021</td>
              <td>Juan josé</td>
              <td>Luis</td>
              <td>340.000</td>
              <td>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider"></span>
                </label>
              </td>
              <td>Actualizar</td>
              <td>Cancelar</td>
              <td>Ver detalle</td>
            </tr>
            <tr>
              <td>71728</td>
              <td>30/09/2021</td>
              <td>Juan josé</td>
              <td>Luis</td>
              <td>340.000</td>
              <td>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider"></span>
                </label>
              </td>
              <td>Actualizar</td>
              <td>Cancelar</td>
              <td>Ver detalle</td>
            </tr>
            <tr>
              <td>71728</td>
              <td>30/09/2021</td>
              <td>Juan josé</td>
              <td>Luis</td>
              <td>340.000</td>
              <td>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider"></span>
                </label>
              </td>
              <td>Actualizar</td>
              <td>Cancelar</td>
              <td>Ver detalle</td>
            </tr>
          </tbody>
        </table>
        <div className="pagination">
          <button className="btn btn--left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="num num-1">1</button>
          <button className="num num-2">2</button>
          <button className="num num-3">3</button>
          <button className="num num-4">4</button>
          <button className="num num-5">5</button>
          <button className="num num-6">6</button>
          <span>...</span>
          <button className="num num-7">23</button>

          <button className="btn btn--right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default maestroVenta;
