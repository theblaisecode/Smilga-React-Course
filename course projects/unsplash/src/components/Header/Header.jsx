import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import logo from "../../img/logo.png";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleTheme() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  return (
    <header>
      <div className="container">
        <div className="headerContent">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="TheBlaiseCode Logo" />
            </a>
          </div>

          <div className="theme">
            <button onClick={toggleTheme}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
