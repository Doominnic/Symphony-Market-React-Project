import React from "react";
import { Link } from "react-router-dom";

const maestroProducto = () => {
  return (
    <div>
      <div className="sell-report">
        <h1 id="reporte-title">Mis Productos</h1>
        <div className="top-table-sell">
          Producto:
          <div className="search-bar-sell">
            <input
              placeholder="Buscar: Producto Ref/Nombre"
              className="search"
            />
            <button>
              <i className="fas fa-search"></i>Buscar
            </button>
          </div>
          <div className="new-sell">
            <Link
              to="/administrador/registroproducto"
              className="new-sell-link"
            >
              <i className="fas fa-plus"></i> Agregar Producto
            </Link>
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Referencia</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Producto</th>
              <th>Marca</th>
              <th>Stock</th>
              <th>Valor del producto</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr className="product-row">
              <td>71728</td>
              <td>
                <div className="imagen-prod">
                  <img
                    src="https://m.media-amazon.com/images/I/61xERq4E-aL._AC_SL1500_.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>Instrumento</td>
              <td>Violín</td>
              <td>Divarius</td>
              <td>
                <input type="number" className="stock-input" />
              </td>
              <td>580.000</td>
              <td>
                <div className="description-box">
                  Violín 4/4, arco, barbada, microafinadores, estuche, puente,
                  brea o pez, método en DVD, guía para diapasón 4/4, cojín 4/4,
                  Afinador de clip, Set de cuerdas.
                </div>
              </td>
            </tr>
            <tr>
              <td>74568</td>
              <td>
                <div className="imagen-prod">
                  <img
                    src="https://m.media-amazon.com/images/I/61FJGu7Kj5L._AC_SL1000_.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>Instrumento</td>
              <td>Guitarra Eléctrica</td>
              <td>PRO SYSTEM AUDIOTEK</td>
              <td>
                <input type="number" className="stock-input" />
              </td>
              <td>1.580.000</td>
              <td>
                <div className="description-box">
                  La guitarra eléctrica estilo Stratocaster de PRO SYSTEM
                  AUDIOTEK es ideal para principiantes y fanáticos de la música.
                  Elaborada en su totalidad de Basswood (madera de tilo), cuenta
                  con 22 trastes, 3 pastillas, una palanca de vibrato, un
                  control de volumen y 2 controles de tono.
                </div>
              </td>
            </tr>
            <tr>
              <td>94587</td>
              <td>
                <div className="imagen-prod">
                  <img
                    src="https://m.media-amazon.com/images/I/612X+7+4F1L._AC_SL1000_.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>Sonido</td>
              <td>Altavoz Inalambrico</td>
              <td>Marshall</td>
              <td>
                <input type="number" className="stock-input" />
              </td>
              <td>1.980.000</td>
              <td>
                <div className="description-box">
                  Más grande que el sonido de la vida, es perfecto para
                  cualquier habitación grande o pequeña. Construido con
                  componentes avanzados. Produce audio limpio y preciso incluso
                  en los más altos niveles
                </div>
              </td>
            </tr>
            <tr>
              <td>65748</td>
              <td>
                <div className="imagen-prod">
                  <img
                    src="https://m.media-amazon.com/images/I/61c0Fzlo3QL._AC_SL1001_.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>Electronicos</td>
              <td>Controlador DJ</td>
              <td>Numark</td>
              <td>
                <input type="number" className="stock-input" />
              </td>
              <td>1.280.000</td>
              <td>
                <div className="description-box">
                  Sistema de DJ Serato completo - Controlador DJ para Serato DJ
                  Lite (incluido) con 4 cubiertas de control, interfaz de audio
                  de 24 bits integrada y conectividad USB Plug and Play para Mac
                  y PC.
                </div>
              </td>
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

export default maestroProducto;
