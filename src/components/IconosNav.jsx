import { Link } from "react-router-dom";

function IconosNav(props) {
  return (
    <Link to={props.route} className="icon-nav">
      <i className={props.icono}></i> {props.descripcion}
    </Link>
  );
}

export default IconosNav;
