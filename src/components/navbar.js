import React from "react";
import "./navbar.css"; // Import du fichier CSS
import logo from "../assets/Logo_Efrei_2022.svg.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
         <img src={logo} alt="Logo" />
        <h1>École Supérieure</h1>
      </div>

      {/* Menu */}
      <ul className="navbar-menu">
        <li>Accueil</li>
        <li>Profil</li>
      </ul>

      {/* Bouton Connexion */}
      <button className="navbar-button">Connexion</button>
    </nav>
  );
}

export default Navbar;
