import "../styles/Header.css";

function Header({ home, courses, about }) {
  return (
    <header>
      <div className="logo">
        <p className="logo__text">ReactAcademy</p>
      </div>

      <div className="menu">
        <a className="menu__item" href={home}>
          Inicio
        </a>
        <a className="menu__item" href={courses}>
          Cursos
        </a>
        <a className="menu__item" href={about}>
          Nosotros
        </a>
      </div>
    </header>
  );
}

export default Header;
