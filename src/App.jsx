import Login from "pages/login";
import Registro from "pages/registro";
import Administrador from "pages/Administrador/Index";
import MaestroProducto from "pages/apuntes";
import MaestroUsuario from "pages/Administrador/maestroUsuario";
import MaestroVenta from "pages/Administrador/maestroVenta";
import RegistroVenta from "pages/Administrador/registroVenta";
import RegistroProducto from "pages/Administrador/registroProducto";
import Vendedor from "pages/Vendedor/Index";
import MaestroVenta2 from "pages/Vendedor/maestroVenta";
import RegistroVenta2 from "pages/Vendedor/registroVenta";
import Usuario from "pages/Usuario/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "layouts/layout";
import LayoutAdmin from "layouts/layoutAdmin";
import LayoutVend from "layouts/layoutVend";
import LayoutRegistro from "layouts/layoutRegistro";
import "styles/sellReport.css";
import "styles/styles.css";
import "styles/login.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path={[
              "/vendedor",
              "/vendedor/maestroventa",
              "/vendedor/registroventa",
            ]}
          >
            <LayoutVend>
              <Switch>
                <Route path="/vendedor/registroventa">
                  <RegistroVenta2 />
                </Route>
                <Route path="/vendedor/maestroventa">
                  <MaestroVenta2 />
                </Route>
                <Route path="/vendedor">
                  <Vendedor />
                </Route>
              </Switch>
            </LayoutVend>
          </Route>
          <Route
            path={[
              "/administrador",
              "/administrador/maestroProducto",
              "/administrador/maestrousuario",
              "/administrador/maestroventa",
              "/administrador/registroproducto",
              "/administrador/registroventa",
            ]}
          >
            <LayoutAdmin>
              <Switch>
                <Route path="/administrador/registroventa">
                  <RegistroVenta />
                </Route>
                <Route path="/administrador/registroproducto">
                  <RegistroProducto />
                </Route>
                <Route path="/administrador/maestroventa">
                  <MaestroVenta />
                </Route>
                <Route path="/administrador/maestrousuario">
                  <MaestroUsuario />
                </Route>
                <Route path="/administrador/maestroproducto">
                  <MaestroProducto />
                </Route>
                <Route path="/administrador">
                  <Administrador />
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route path="/Usuario">
            <Layout>
              <Usuario />
            </Layout>
          </Route>
          <Route path="/registro">
            <LayoutRegistro>
              <Registro />
            </LayoutRegistro>
          </Route>
          <Route path={["/"]}>
            <Layout>
              <Switch>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
