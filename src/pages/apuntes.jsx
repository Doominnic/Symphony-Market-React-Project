/*Use Effect / Use State*/
/*
import React, { useEffect, useState } from "react";

const Index = () => {
  const [edad, setEdad] = useState(0);
  const [esMenorDeEdad, setEsMenorDeEdad] = useState(false);
  const [mostrarCamposAdicionales, serMostrarCamposAdicionales] =
    useState(false);

  useEffect(() => {
    if (edad >= 18) {
      setEsMenorDeEdad(false);
    } else {
      setEsMenorDeEdad(true);
    }
  }, [edad]);

  return (
    <form>
      <div className="test">
        <h2>Formulario de creacion de vehiculos</h2>
        <label htmlFor="edad">
          Por favor ingrese su edad
          <input
            value={edad}
            onChange={e => {
              setEdad(e.target.value);
            }}
            type="number"
          />
        </label>
        {esMenorDeEdad ? (
          <span>Usted es menor de edad!, no puede hacer pagos</span>
        ) : (
          <span>Usted es mayor de edad, si puede hacer pagos</span>
        )}
        <button
          onClick={e => serMostrarCamposAdicionales(!mostrarCamposAdicionales)}
          type="button"
        >
          Mostrar campos adicionales
        </button>
        {mostrarCamposAdicionales && (
          <div>
            <input type="text" placeholder="dato nuevo" />
            <input type="text" placeholder="dato nuevo" />
            <input type="text" placeholder="dato nuevo" />
            <input type="text" placeholder="dato nuevo" />
            <input type="text" placeholder="dato nuevo" />
          </div>
        )}
      </div>
    </form>
  );
};

export default Index;
*/
/*Use ref */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const MaestroProducto = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [vehiculos, setVehiculos] = useState([]);
  const [textoBoton, setTextoBoton] = useState("Agregar nuevo cliente");

  useEffect(() => {
    //obtener lista de vehiculos desde el frontend
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users",
    };

    axios
      .request(options)
      .then(function (response) {
        setVehiculos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setVehiculos([]);
  }, []);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton("Agregar nuevo cliente");
    } else {
      setTextoBoton("Mostrar Todos los clientes");
    }
  }, [mostrarTabla]);

  return (
    <div>
      <h2 className="tit-clientes">Administracion de clientes</h2>
      <button
        onClick={e => {
          setMostrarTabla(!mostrarTabla);
        }}
      >
        {textoBoton}
      </button>

      {mostrarTabla ? (
        <TablaProductos listaVehiculos={vehiculos} />
      ) : (
        <FormularioProductos
          setMostrarTabla={setMostrarTabla}
          setVehiculos={setVehiculos}
          listaVehiculos={vehiculos}
        />
      )}
      <ToastContainer position="bottom-center" autoClose={5000} />
    </div>
  );
};

const TablaProductos = ({ listaVehiculos }) => {
  /*
  useEffect(() => {
    console.log(
      "este es el listado de vehiculos en el componente de tabla",
      listaVehiculos
    );
  }, [listaVehiculos]);
  */

  return (
    <div>
      <h3 className="tit-tabla">Todos los clientes</h3>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>name</th>
            <th>email</th>
            <th>city</th>
            <th>company name</th>
          </tr>
        </thead>
        <tbody>
          {listaVehiculos.map(vehiculo => {
            return (
              <tr>
                <td>{vehiculo.username}</td>
                <td>{vehiculo.name}</td>
                <td>{vehiculo.email}</td>
                <td>{vehiculo.address.city}</td>
                <td>{vehiculo.company.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FormularioProductos = ({
  setMostrarTabla,
  listaVehiculos,
  setVehiculos,
}) => {
  const form = useRef(null);

  const submitForm = async e => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoVehiculo = {};
    fd.forEach((value, key) => {
      nuevoVehiculo[key] = value;
    });

    const options = {
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      headers: { "Content-type": "application/json" },
      data: {
        id: nuevoVehiculo.id,
        name: nuevoVehiculo.name,
        username: nuevoVehiculo.username,
        email: nuevoVehiculo.email,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success("Vehiculo agregado con exito");
      })
      .catch(function (error) {
        console.error(error);
        toast.success("Error creando un vehiculo");
      });

    setMostrarTabla(true);

    //setVehiculos([...listaVehiculos, nuevoVehiculo]);
  };

  return (
    <div>
      <h3 className="tit-form">Agregar nuevo cliente</h3>
      <form ref={form} onSubmit={submitForm}>
        <div className="test">
          <label htmlFor="id">
            ID:
            <input name="id" type="text" placeholder="1" required />
          </label>
          <label htmlFor="nombre">
            Nombre:
            <input name="name" type="text" placeholder="Juan" required />
          </label>
          <label htmlFor="username">
            Username:
            <input name="username" type="text" placeholder="Juanxc" required />
          </label>
          <label htmlFor="email">
            Email:
            <input
              name="email"
              type="email"
              placeholder="@gmail.com"
              required
            />
          </label>
          <button type="submit">Guardar Cliente</button>
        </div>
      </form>
    </div>
  );
};

export default MaestroProducto;
