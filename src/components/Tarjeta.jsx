import Boton from "./Boton";
import "../styles/Tarjeta.css";

function Tarjeta({ titulo, descripcion, emoji, clasificacion }) {
  return (
    <div className="tarjeta">
      <span className="tarjeta__emoji">{emoji}</span>
      <h3>{titulo}</h3>
      <p className="tarjeta__descripcion">{descripcion}</p>
      <Boton text={clasificacion} onClick={() => console.log("click")} />
    </div>
  );
}

export default Tarjeta;
