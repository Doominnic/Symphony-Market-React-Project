import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

const login = () => {
  function responseGoogle(response) {
    if (response && response.tokenId) {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: response.tokenId,
          email: response.profileObj.email,
          nombres: response.profileObj.givenName,
          apellidos: response.profileObj.familyName,
        }),
      })
        .catch(err => console.error(err))
        .then(respuesta => respuesta.json())
        .then(respuestaServidor => {
          console.log(respuestaServidor);
        });
    }
  }

  return (
    <div className="container">
      <div className="index-page">
        <h1 id="welcome-tit">Bienvenido a Symphony Market</h1>
        <div className="registrate">
          <p>
            La mejor tienda virtual donde podras vender todo lo relacionado con
            música
          </p>
          <p>¡Se parte de nuestro equipo!</p>
          <div>
            <p className="no-cuenta-p">¿No tienes cuenta?</p>
            <div className="registro-btn">
              <Link to="/registro" className="link-registro">
                Regístrate
              </Link>
              <span>ó</span>
              <div className="google-btn">
                <GoogleLogin
                  clientId="813072476211-8lr6g12fjqa5q20qtd6r6k3ikddemv5g.apps.googleusercontent.com"
                  buttonText="Continuar con Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
