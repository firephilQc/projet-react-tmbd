import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import UserDarkMode from "./UserDarkMode";

const Navigation = () => {
const [darkMode, toggleDarkMode] = UserDarkMode();

    return (
        <div className="navigation">
            <Logo />
            <NavLink exact to="/" activeClassName="nav-active">
                Populaire
            </NavLink>
            <NavLink exact to="/search" activeClassName="nav-active">
                Recherche
            </NavLink>
            <NavLink exact to="/categories" activeClassName="nav-active">
            Catégories
            </NavLink>
            <NavLink exact to="/moi" activeClassName="nav-active">
            Moi
            </NavLink> 
            <button onClick={toggleDarkMode}> {darkMode ? 'mode clair🌞':'mode sombre🌕'}
      </button>
            <UserDarkMode/>
        </div>
        
    )
}

export default Navigation;