import React from "react";
import Editar from "media/Editar.png";
import Eliminar from "media/Eliminar.jpg";
import { Link } from "react-router-dom";

const maestroUsuario = () => {
  return (
    <div>
      <h2 id="reporte-title">GESTION DE USUARIOS</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID_usuario</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>E-mail</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Jhon</td>
              <td>Yela</td>
              <td>jhonayela30@gmail.com</td>
              <td>
                <select>
                  <option>Admistrador</option>
                  <option>Vendedor</option>
                  <option>Usuario</option>
                </select>
              </td>
              <td>
                <select>
                  <option>Autorizado</option>
                  <option>No autorizado</option>
                  <option>Pendiente</option>
                </select>
              </td>
              <td>
                <i class="far fa-edit"></i>
              </td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Andres</td>
              <td>Torres</td>
              <td>andrztorrez10@gmail.com</td>
              <td>
                <select>
                  <option>Admistrador</option>
                  <option selected>Vendedor</option>
                  <option>Usuario</option>
                </select>
              </td>
              <td>
                <select>
                  <option>Autorizado</option>
                  <option>No autorizado</option>
                  <option>Pendiente</option>
                </select>
              </td>
              <td>
                <i class="far fa-edit"></i>
              </td>
              <td>
                <i class="fas fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <Link to="/registro" type="button" className="link-crear-usu">
          Crear usuario
        </Link>
      </div>
    </div>
  );
};

export default maestroUsuario;
