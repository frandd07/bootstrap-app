"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Grid() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-dark">Ejercicio 2</h2>
      <div className="row mb-4">
        <div className="col-md-3 p-3 bg-light border rounded shadow-sm">
          <h5 className="text-center text-secondary">Columna 1 (3 columnas)</h5>
          <p className="text-center">Primera columna</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 p-3 bg-danger text-white rounded shadow-sm">
          <h5 className="text-center">Columna 1 (8 columnas)</h5>
          <p>Contenido de la segunda columna.</p>
        </div>
        <div className="col-md-4 p-3 bg-success text-white rounded shadow-sm">
          <h5 className="text-center">Columna 2 (4 columnas)</h5>
          <p>Contenido de la tercera columna.</p>
        </div>
      </div>
    </div>
  );
}
