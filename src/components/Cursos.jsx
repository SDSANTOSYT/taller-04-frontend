import Tarjeta from "./Tarjeta";
import "../styles/Cursos.css";

function Cursos({ cursos }) {
  return (
    <section id="cursos" className="cursos">
      <h2 className="cursos__titulo">Nuestros Cursos</h2>
      <p className="cursos__descripcion">
        Elige el camino que mejor se adapte a ti.
      </p>
      <div className="cursos__grid">
        {cursos.map((curso) => (
          <Tarjeta
            key={curso.titulo}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            emoji={curso.emoji}
            clasificacion={curso.clasificacion}
          />
        ))}
      </div>
    </section>
  );
}

export default Cursos;
