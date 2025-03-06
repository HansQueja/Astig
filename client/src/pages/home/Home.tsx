import "./Home.css";
import Bg from "../../assets/Background.png";
import { useState, ChangeEvent } from "react";

function Home() {

  // possible choices for the select options
  type SearchType = 'myself' | 'child' | 'friend' | 'none';
  
  // Create an array from the SearchType values.
  const searchOptions: SearchType[] = ['myself', 'child', 'friend', 'none'];

  // possible level types
  type LevelType = 'elementary' | 'highschool' | '1st2ndcollege' | '3rdabovecollege'

  // Create an array from the SearchType values.
  const levelOptions: LevelType[] = ['elementary', 'highschool', '1st2ndcollege', '3rdabovecollege'];

  // controls the popup appearance
  const [showPopup, setShowPopup] = useState(false);
  const [showLevel, setShowLevel] = useState(false);
  const [showExtra, setShowExtra] = useState(false);

  // saves and sets the name depending on the user
  const [name, setName] = useState<string>("");

  // initialize selected search and method for storing it
  const [selectedSearch, setSelectedSearch] = useState<SearchType | ''>('');

  // initialize variable and method for level
  const [level, setLevel] = useState<LevelType | ''>("highschool");

  // handles input on nickname
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
  };
  
  // handles change in the search selection
  const handleSearchChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSearch(event.target.value as SearchType);
    setShowLevel(true);
  };

  // handles change in the level selection
  const handleLevelChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLevel(event.target.value as LevelType);
    setShowExtra(true);
  };

  // shows the popup
  const openPopup = () => {
    setShowPopup(true);
  };

  // hides the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (

    <div>
      <img src= { Bg } className = "background"></img>

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

      <button type="button" className="btn btn-light" id="lrnBtn"  onClick={openPopup}>Take Demographic Survey</button>
      {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Demographic Survey</h2>
              <p>To allow us to understand the demographic our our users and to provide <br/>a better experience, answer the questions below!</p>
              <hr/>

              <div className="popup-questions">
                <div className="popup-item">
                  <h6>What's your Nickname?</h6>
                  <input type="text" id="nickname" placeholder="Enter text" onChange={handleNameChange} required></input>
                </div>
                <div className="popup-item">
                  <h6>I'm Searching for</h6>
                  <select name="searching" id="searching" onChange={handleSearchChange}>
                    <option disabled hidden selected>Select an Option</option>

                    {searchOptions.map((option) => (
                      <option key={option} value={option}>
                        {option === 'myself' ? 'For Myself' :
                        option === 'child' ? 'My Child' :
                        option === 'friend' ? 'My Friend' :
                        'None Applies'}
                      </option>
                    ))}
                  </select>
                </div>
                
                {showLevel && (
                  <div className="popup-item">
                    <h6>What is your {
                    selectedSearch === 'child' ? "child's" :
                    selectedSearch === 'friend' ? "friend's" :
                    ''} current year level, {name}?</h6>

                    <select name="level" id="level" onChange={handleLevelChange}>
                      <option disabled hidden selected>Select Level</option>
                      'elementary' | 'highschool' | '1st2ndcollege' | '3rdabovecollege'
                      {levelOptions.map((option) => (
                        <option key={option} value={option}>
                          {option === 'elementary' ? 'Elementary' :
                          option === 'highschool' ? 'High School' :
                          option === '1st2ndcollege' ? '1st - 2nd Year College' :
                          option === '3rdabovecollege' ? '3rd Year and Above College' :
                          ''}
                        </option>
                      ))}
                  </select>
                  </div>
                )}

                {showExtra && (
                    <div className="popup-item">
                      <h6>What is your favorite food, {name}?</h6>
                      <input type="text" id="food" placeholder="e.g. Pasta"></input>
                    </div>
                )}
              </div>
              <button className="close-btn" onClick={closePopup}>Close</button>
              <button className="submit-btn" onClick={closePopup}>Submit</button>
            </div>
          </div>
        )}
    </div>
  );
}

export default Home;
