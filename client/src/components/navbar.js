import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <NavLink className="navbar-brand" to="/">
        <img
          style={{ width: "50px" }}
          src="https://images.vexels.com/media/users/3/135505/isolated/lists/fbe252e1ae669317ba033154878e2441-icono-de-circulo-de-bus.png"
          alt="logo"
        ></img>
      </NavLink>
      <h2>Bus Software</h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link ms-auto" to="/create">
              Crear Registro Nuevo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
