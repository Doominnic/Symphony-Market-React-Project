import React from "react";

const registroVenta = () => {
  return (
    <main>
      <h1 className="ventas-tit">Registro de ventas</h1>
      <form action="" className="form-venta">
        <div className="datos-venta">
          <div className="info-venta">
            <div className="tit-box-inf">
              <h2>Informacion de la venta</h2>
            </div>
            <div className="info-box">
              <div className="datos-box">
                <label htmlFor="numer-venta">ID de la venta: </label>
                <input type="text" placeholder="Venta ID" required />
              </div>
              <div className="datos-box">
                <label htmlFor="fecha">Fecha: </label>
                <input type="datetime-local" required />
              </div>
              <div className="datos-box">
                <label htmlFor="vendedor">Vendedor:</label>
                <select
                  name="vendedor"
                  required
                  defaultValue={0}
                  className="select-vendedor"
                >
                  <option disabled value={0}>
                    Vendedor
                  </option>
                  <option>Christian</option>
                  <option>Jhon</option>
                  <option>Alber</option>
                  <option>Felipe</option>
                  <option>Carlos</option>
                </select>
              </div>
            </div>
          </div>
          <div className="datos-cliente">
            <div className="tit-box-dat">
              <h2>Datos del cliente</h2>
            </div>
            <div className="info-box">
              <div className="datos-box">
                <label htmlFor="nombre-cliente">Nombre: </label>
                <input type="text" placeholder="Nombre" required />
              </div>
              <div className="datos-box">
                <label htmlFor="direccion-cliente">Dirección: </label>
                <input type="text" placeholder="Dirección" />
              </div>
              <div className="datos-box">
                <label htmlFor="telefono-cliente">Teléfono: </label>
                <input type="tel" placeholder="Teléfono" />
              </div>
              <div className="datos-box">
                <label htmlFor="correo-cliente">Correo: </label>
                <input type="email" placeholder="Correo" required />
              </div>
            </div>
          </div>
        </div>

        <table className="tabla-ventas">
          <thead>
            <tr>
              <th>Referencia</th>
              <th>Producto</th>
              <th>Valor Unitario</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="number" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Subtotal:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Descuento:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>IVA:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Total:</td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="newventa-btn">
          Registrar Venta
        </button>
      </form>
    </main>
  );
};

export default registroVenta;
