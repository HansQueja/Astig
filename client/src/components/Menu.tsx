import "./Menu.css";
import Logo from "../assets/AstigLogo.png";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <>
      <nav id="menu">
        <NavLink to="/">
          <img
            src={Logo}
            id="logo"
            style={{ cursor: "pointer" }}
            alt="Logo"
          />
        </NavLink>
        <ul className="">
          <li>
            <NavLink className="Link" to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className="Link" to="/programs">Programs and Universities</NavLink>
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
