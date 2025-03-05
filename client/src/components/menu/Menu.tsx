import "./Menu.css";
import Logo from "../../assets/AstigLogo.png";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav className="menu">
        <NavLink to="/">
          <img
            src={Logo}
            id="logo"
            style={{ cursor: "pointer" }}
            alt="Logo"
          />
        </NavLink>
        <ul>
          <li>
            <NavLink className="Link" id="home" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="Link" id="prog" to="/programs">Programs & Universities</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/dost">DOST Scholarship</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
