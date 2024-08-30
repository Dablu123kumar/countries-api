import {useState,useContext} from "react";
import { ThemeContext } from "../Contexts/TheamContext";
import { UseTheme } from "../hooks/UseTheme";
import { Link } from "react-router-dom";

function Header() {
  const [isDark,setIsDark] =UseTheme()
  return (
    <div>
      <header className = {`${isDark ? 'dark' : '' }`}>
        <h2>
        <Link to='/'>Where in the world?</Link>
        </h2>
        <div className="themer">
          <p className="theme-changer" onClick = {() => {
             setIsDark(!isDark)
             localStorage.setItem('isDarkMode', !isDark )
            } }
             >
            <i className={`fa-regular fa-${isDark? 'sun' : 'moon'}`}> &nbsp;  </i>  {isDark ? 'Light' : 'Dark'} Mode
          </p>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
