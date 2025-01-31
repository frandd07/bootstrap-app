"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function NavBar() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Inicio</h5>
          <p className="text-body-secondary">Hola, mi nombre es Fran</p>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="text-white text-decoration-none">
                React
              </a>
            </li>
            <li>
              <a href="#services" className="text-white text-decoration-none">
                Next
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-decoration-none">
                Bootstrap
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-decoration-none">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Ejercicio 3
          </a>
        </div>
      </nav>
    </div>
  );
}
