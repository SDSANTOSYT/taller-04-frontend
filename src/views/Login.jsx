import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [formulario, setFormulario] = useState({ correo: "", contrasena: "" });
  const [enviado, setEnviado] = useState(false);

  const formularioCompleto =
    formulario.correo.trim() !== "" && formulario.contrasena.trim() !== "";

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setFormulario((datosActuales) => ({ ...datosActuales, [name]: value }));
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section className="login">
      <form className="login__formulario" onSubmit={manejarEnvio}>
        <h1 className="login__titulo">Iniciar sesión</h1>
        <label className="login__campo">
          Correo
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={manejarCambio}
            disabled={enviado}
            required
          />
        </label>
        <label className="login__campo">
          Contraseña
          <input
            type="password"
            name="contrasena"
            value={formulario.contrasena}
            onChange={manejarCambio}
            disabled={enviado}
            required
          />
        </label>
        <button
          className="boton login__boton"
          type="submit"
          disabled={!formularioCompleto || enviado}
        >
          {enviado ? "Formulario enviado" : "Ingresar"}
        </button>
      </form>
    </section>
  );
}

export default Login;
