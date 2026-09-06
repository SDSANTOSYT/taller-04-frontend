import { useState } from "react";
import Boton from "./Boton";
import "../styles/Inscripcion.css";

function Inscripcion() {
  const [contador, setContador] = useState(0);
  return (
    <>
      <section className="inscripcion">
        <h2 className="inscripcion__titulo">
          Cuantos estudiantes van a inscribirse?
        </h2>
        <p className="inscripcion__descripcion">
          Usa los botones para ajustar el numero.
        </p>
        <div className="inscripcion__botones">
          <Boton onClick={() => setContador((numero) => numero - 1)} text="-" />
          <span className="inscripcion__contador">{contador}</span>
          <Boton onClick={() => setContador((numero) => numero + 1)} text="+" />
        </div>
      </section>
    </>
  );
}

export default Inscripcion;
