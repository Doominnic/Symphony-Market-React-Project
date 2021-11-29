import React from "react";

const ManuBar = () => {
  return (
    <menu>
      <div className="menu-top">
        <div className="search-bar">
          <input placeholder="Buscar un producto" className="search" />
          <button className="search-btn">
            <i className="fas fa-search"></i>Buscar
          </button>
        </div>

        <div className="menu-bar">
          <a className="notif-button">
            <i className="fas fa-bell"></i>
          </a>
          <a className="mess-button">
            <i className="fas fa-envelope"></i>
          </a>
          <a className="mess-button">
            <i className="fas fa-shopping-cart"></i>
          </a>

          <div className="dropdown profile">
            <button className="dropbtn">
              <i className="fas fa-user-circle"></i>
              Hola, Christian
            </button>
            <div className="dropdown-content">
              <a href="/administrador">Mi perfil</a>
              <a href="/administrador">Configuración</a>
              <a href="/administrador">Ayuda y soporte</a>
              <a href="/">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </menu>
  );
};

export default ManuBar;
