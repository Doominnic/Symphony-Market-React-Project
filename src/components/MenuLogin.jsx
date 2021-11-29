import React from "react";
import { Link } from "react-router-dom";

const MenuLogin = () => {
  return (
    <div>
      <menu className="menu-login">
        <div className="menu-top">
          <div className="logo-login">
            <h1>Symphony Market</h1>
          </div>

          <form className="login-form">
            <div className="email">
              <div>
                <input
                  type="email"
                  placeholder="Ingrese correo"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="password">
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  id="password"
                  required
                />
              </div>
            </div>
            <div className="recuerdame">
              <input type="checkbox" id="recuerdame" />
              <span>Recuerdame</span>
            </div>
            <div>
              <span>¿Olvidaste tu </span>
              <Link to="/" className="forgot">
                contraseña?
              </Link>
            </div>

            <button type="submit" id="btn-login">
              <Link to="/administrador" className="link-login">
                Inicia Sesión
              </Link>
            </button>
          </form>
        </div>
      </menu>
    </div>
  );
};

export default MenuLogin;
