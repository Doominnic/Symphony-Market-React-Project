import IconosNav from "./IconosNav";

const NavigationBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Symphony Market</h1>
      </div>

      <IconosNav
        icono="fas fa-home"
        descripcion="Inicio"
        route="/administrador"
      />

      <IconosNav
        icono="fas fa-guitar"
        descripcion="Agregar Producto"
        route="/administrador/registroproducto"
      />
      <IconosNav
        icono="fas fa-dollar-sign"
        descripcion="Nueva Venta"
        route="/administrador/registroventa"
      />
      <IconosNav
        icono="fas fa-search-dollar"
        descripcion="Buscar venta"
        route="/administrador/maestroventa"
      />
      <IconosNav
        icono="fas fa-store"
        descripcion="Clientes"
        route="/administrador/maestroproducto"
      />
      <IconosNav
        icono="fas fa-cog"
        descripcion="Usuarios"
        route="/administrador/maestrousuario"
      />
    </nav>
  );
};

export default NavigationBar;
