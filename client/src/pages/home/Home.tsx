import "./Home.css";
import Bg from "../../assets/Background.png";
import { useState } from "react";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <img src= { Bg } className = "background"></img>

      <div className = "content">
        <h1>
        Aspiring Scholars Toolkit and Information Guide
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
        mollit anim id est laborum
        </p>
      </div>

      <button type="button" className="btn btn-light" id="lrnBtn"  onClick={openPopup}>Take Career Affinity Test</button>

      {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Career Affinity Test</h2>
              <p>We have prepared a set of questions for you to identify which programs and universities will be suitable for you!</p>
              <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Home;
