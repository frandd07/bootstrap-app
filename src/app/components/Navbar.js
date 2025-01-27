"use client";

export default function NavBar() {
  return (
    <div>
      <div
        className="collapse"
        id="navbarToggleExternalContent"
        data-bs-theme="dark"
      >
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Menú</h5>
          <p className="text-body-secondary">
            Selecciona una de las opciones del menú.
          </p>
          <ul className="list-unstyled">
            <li>
              <a href="#home" className="text-white text-decoration-none">
                Inicio
              </a>
            </li>
            <li>
              <a href="#services" className="text-white text-decoration-none">
                Servicios
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-decoration-none">
                Sobre nosotros
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
            Mi Sitio Web
          </a>
        </div>
      </nav>
    </div>
  );
}
