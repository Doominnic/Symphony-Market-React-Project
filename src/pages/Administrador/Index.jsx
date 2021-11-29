import React from "react";

const Index = () => {
  return (
    <div className="index-main">
      <section className="index-grid">
        <div className="box instrumentos">
          <h1 className="tit-index">INSTRUMENTOS</h1>
        </div>
        <div className="grid-box">
          <div className="box accesorios">
            <h1 className="tit-index">ACCESORIOS</h1>
          </div>
          <div className="box repuestos">
            <h1 className="tit-index">REPUESTOS</h1>
          </div>
        </div>
        <div className="grid-box-3">
          <div className="box electronicos">
            <h1 className="tit-index">ELECTRÓNICOS</h1>
          </div>
          <div className="box sonido">
            <h1 className="tit-index">SONIDO</h1>
          </div>
          <div className="box nuevo">
            <h1 className="tit-index">AGREGAR PRODUCTO</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
