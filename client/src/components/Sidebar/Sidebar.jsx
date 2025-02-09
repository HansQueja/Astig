import { NavLink } from "react-router-dom";
import './Sidebar.css'
import dashboardIcon from "../../assets/home.png";

function Sidebar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-margin">
                <div className="astig-logo">
                    ASTIG
                </div>
                <div className="astig-tagline">
                    Alamin, Tuklasin!
                </div>
                <hr/>
                <div className="navigation-panel">
                    <h5>MAIN</h5>
                    <NavLink to="/dashboard" className="navigation-item">
                        <img src={dashboardIcon} />Dashboard
                    </NavLink>
                </div>
            </div>
        </div>
    );
  
}

export default Sidebar
