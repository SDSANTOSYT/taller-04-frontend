import "../styles/Navbar.css";
import { Outlet, NavLink } from "react-router";
import Footer from "./Footer";

function Navbar({ home, courses, about }) {
  return (
    <>
      <header>
        <div className="logo">
          <p className="logo__text">ReactAcademy</p>
        </div>

        <div className="menu">
          <NavLink className="menu__item" to={home}>
            Inicio
          </NavLink>
          <NavLink className="menu__item" to={courses}>
            Cursos
          </NavLink>
          <NavLink className="menu__item" to={about}>
            Nosotros
          </NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Navbar;
