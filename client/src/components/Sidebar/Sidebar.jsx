import { NavLink } from "react-router-dom";
import './Sidebar.css'
import dashboardIcon from "../../assets/home.png";
import logo from "../../assets/duck.png";

function Sidebar() {

    return (
        <div className="sidebar-container">
                <div>
                    <img src={logo} className="astig-logo"/>
                </div>
                <hr/>
                <div className="navigation-panel">
                    <NavLink to="/landing" className="navigation-item">
                        HOME
                    </NavLink>
                    <NavLink to="/dashboard" className="navigation-item">
                        PROGRAMS AND UNIVERSITIES
                    </NavLink>
                    <NavLink to="/dashboard" className="navigation-item">
                        DOST SCHOLARSHIP
                    </NavLink>
                    <NavLink to="/dashboard" className="navigation-item">
                        ABOUT
                    </NavLink>
                    <NavLink to="/dashboard" className="navigation-item">
                        CONTACT
                    </NavLink>
                </div>
        </div>
    );
  
}

export default Sidebar
