// NavBar.js

import React from 'react';
import logo from './1.png'; // Importe o caminho da sua logo aqui
import './navBar.css'; // Importe o arquivo CSS que você criou

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img style={{width:'200px', height: '100%'}} src={logo} alt="Logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Comprar</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Vender</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Consultoria</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Ajuda</a>
        </li>
      </ul>
      <div className="navbar-login">
        <p>Entrar</p>
      </div>
    </nav>
  );
}

export default NavBar;
