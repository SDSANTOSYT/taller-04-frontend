import Cursos from "../components/Cursos";

function CursosPage() {
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
      <Cursos cursos={cursos} />
    </>
  );
}

export default CursosPage;
