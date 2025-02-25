import "./Home.css";
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
      <div className = "content">
        <h1>
        Start your scholar journey with ASTIG
        </h1>
        <p>
        Live your isko dreams, kasama ang ASTIG mong tropa! <b>Aspiring Scholars Toolkit and
        Information Guide (ASTIG)</b> provides you with information about <i>DOST scholarship,
        eligible programs, accredited universities, scholar initiatives, and more!</i>
        </p>
        <p></p>
        <p>
        Not yet sure kung anong <i>astig</i> program ang para sa'yo?
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
