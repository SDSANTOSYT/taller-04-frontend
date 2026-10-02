import { Link } from "react-router";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <p className="not-found__codigo">404</p>
      <h1 className="not-found__titulo">Página no encontrada</h1>
      <p className="not-found__descripcion">
        La dirección que buscas no existe en ReactAcademy.
      </p>
      <Link className="boton" to="/">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
