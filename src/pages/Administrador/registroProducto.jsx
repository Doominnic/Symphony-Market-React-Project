import React from "react";

const registroProducto = () => {
  return (
    <div className="new-product-section">
      <h1 className="new-product">Agregar nuevo producto</h1>
      <section className="ingreso-instrumentos">
        <form className="form-imagen" action="" method="post">
          <div className="categoria">
            <h3 className="tit-cat">Selecciona una categoria</h3>
            <div className="cajas-categorias">
              <div className="cat cat-instru">
                <input type="checkbox" id="instrumentos" />
                <span>Instrumentos</span>
              </div>
              <div className="cat cat-acce">
                <input type="checkbox" id="instrumentos" />
                <span>Accesorios</span>
              </div>
              <div className="cat cat-elect">
                <input type="checkbox" id="instrumentos" />
                <span>Electrónicos</span>
              </div>
              <div className="cat cat-sonido">
                <input type="checkbox" id="instrumentos" />
                <span>Sonido</span>
              </div>
              <div className="cat cat-rep">
                <input type="checkbox" id="instrumentos" />
                <span>Repuestos</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="new-instru-title">Ingresa tu Producto</h2>

            <select defaultValue="0" name="Instrumentos" className="clase-inst">
              <option value="0">Tipo de instrumento</option>
              <optgroup label="Cuerdas">
                <option value="1">Guitarra</option>
                <option value="2">Bajo</option>
                <option value="3">Violín</option>
              </optgroup>
              <optgroup label="Vientos">
                <option value="4">Flauta</option>
                <option value="5">Trompeta</option>
                <option value="6">Saxofón</option>
              </optgroup>
              <optgroup label="Percusión">
                <option value="7">Batería</option>
                <option value="8">Tambores</option>
              </optgroup>
            </select>

            <div className="marca">
              <label htmlFor="marca" placeholder="Unidades">
                Marca del producto:
              </label>
              <input type="text" id="marca" />
            </div>
          </div>
          <div>
            <h3 className="new-instru-title">Cargar imagen</h3>
            <ul className="formulario">
              <li className="carga-imagen">
                <i className="far fa-file-image"></i>
                <input className="upload-img" type="file" name="imagen" />
              </li>
              <li className="stock-disp">
                <i className="fas fa-dolly"></i>
                <label htmlFor="stock" placeholder="Unidades">
                  Stock disponible:
                </label>
                <input type="number" id="stock" />
              </li>
              <li className="valor-prod">
                <i className="fas fa-dollar-sign"></i>
                <label htmlFor="valor" placeholder="Pesos">
                  Valor del producto:
                </label>
                <input type="number" id="value" />
              </li>
            </ul>
          </div>
          <div className="descripcion">
            <ul>
              <label htmlFor="description" className="desc-tit">
                Descripción
              </label>
              <li>
                <textarea id="description" cols="30" rows="10"></textarea>
              </li>
            </ul>
          </div>
          <div className="add-btn">
            <button className="btn-add"> Agregar producto </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default registroProducto;
