import "./Home.css";
import Bg from "../../assets/Background.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const test = () => {
    navigate("/about");
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

      <button type="button" className="btn btn-light" id="lrnBtn"  onClick={test}>
          Take Test
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
    </div>
  );
}

export default Home;
