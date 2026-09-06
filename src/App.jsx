import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Header from "./components/Header";
import Boton from "./components/Boton";
import Inicio from "./components/Inicio";
import Tarjeta from "./components/Tarjeta";
import Cursos from "./components/Cursos";
import Inscripcion from "./components/Inscripcion";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const cursos = [
    {
      titulo: "React Basico",
      descripcion:
        "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
      emoji: "⚛️",
      clasificacion: "Principiante",
    },
    {
      titulo: "React Hooks",
      descripcion:
        "Profundiza en useState, useEffect y crea tus propios custom hooks.",
      emoji: "🔁",
      clasificacion: "Intermedio",
    },
    {
      titulo: "Estado Global",
      descripcion:
        "Gestiona el estado con Context API y aprende a cuándo usarlo.",
      emoji: "🗂️",
      clasificacion: "Intermedio",
    },
    {
      titulo: "React Avanzado",
      descripcion:
        "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
      emoji: "🚀",
      clasificacion: "Avanzado",
    },
  ];
  return (
    <>
      <Header home={"#inicio"} courses={"#cursos"} about={"#nosotros"} />
      <Inicio cursosLink={"#cursos"} />
      <Cursos cursos={cursos} />
      <Inscripcion />
      <Footer />
    </>
  );
}

export default App;
