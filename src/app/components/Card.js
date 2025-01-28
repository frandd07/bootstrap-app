"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Cards() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {/* Tarjeta 1 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#28242c" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              className="card-img-top"
              alt="Bootstrap"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-white">Ejercicio 4</h5>
              <p className="card-text text-center text-white">
                Creando una Card Responsiva. En este ejercicio estamos usando
                Bootstrap por primera vez para crear una CARD que se ajusta a
                todas las pantallas. La tarjeta tiene una imagen, un título, una
                descripción y unos enlaces. Lo mejor de todo es que se adapta
                automáticamente al tamaño de la pantalla.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link text-white">
                ¿Qué es Bootstrap?
              </a>
              <a href="#" className="card-link text-white">
                Ejemplos
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#28242c" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              className="card-img-top"
              alt="React"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-white">React</h5>
              <p className="card-text text-center text-white">
                React es una biblioteca de JavaScript que nos permite crear
                interfaces de usuario interactivas. Las tarjetas en esta
                aplicación se actualizan de manera eficiente y automática, y se
                ajustan al tamaño de la pantalla.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link text-white">
                ¿Qué es React?
              </a>
              <a href="#" className="card-link text-white">
                Ejemplos de React
              </a>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ backgroundColor: "#28242c" }}>
            <img
              src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png"
              className="card-img-top"
              alt="Next"
            />
            <div className="card-body">
              <h5 className="card-title text-center text-white">Next.js</h5>
              <p className="card-text text-center text-white">
                Es un marco de desarrollo basado en React que nos permite crear
                aplicaciones web con funcionalidades de renderizado del lado del
                servidor y generación de sitios estáticos.
              </p>
            </div>
            <div className="card-body">
              <a href="#" className="card-link text-white">
                ¿Qué es Next.js?
              </a>
              <a href="#" className="card-link text-white">
                Ejemplos de Next.js
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
