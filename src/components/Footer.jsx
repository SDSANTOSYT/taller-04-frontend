import "../styles/Footer.css";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer id="nosotros">
      <p>
        &copy; 2026 <NavLink to="/">ReactAcademy</NavLink>. Taller 04 -- React
        Fundamentos.
      </p>
    </footer>
  );
}

export default Footer;
