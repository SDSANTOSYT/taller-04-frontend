import Boton from "./Boton";
import "../styles/Inicio.css";

function Inicio({ cursosLink }) {
  return (
    <section id="inicio" className="inicio">
      <h1>
        Aprende <span className="resaltado">React</span> desde cero
      </h1>
      <p className="descripcion">
        Domina la librería más popular del frontend con proyectos <br />
        prácticos y reales
      </p>
      <Boton
        text="Ver Cursos"
        onClick={() => (window.location.href = cursosLink)}
      />
    </section>
  );
}

export default Inicio;
