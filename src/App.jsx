import Navbar from "./components/Navbar";
import Inicio from "./views/Inicio";
import Inscripcion from "./views/Inscripcion";
import CursosPage from "./views/CursosPage";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import "./App.css";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navbar home="/" courses="/cursos" about="/nosotros" />}
      >
        <Route index element={Inicio({ cursosLink: "/cursos" })} />
        <Route path="cursos" element={<CursosPage />} />
        <Route path="nosotros" element={<Inscripcion />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
