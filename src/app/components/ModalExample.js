"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

export default function ModalExample() {
  useEffect(() => {
    // Lo pongo para que se ejecute solo en el cliente sino da error en el document aunque se ve todo.
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ejercicio 5
        </button>
      </div>

      <div
        className="modal"
        tabIndex="-1"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirma tu asistencia
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                La charla se llevará a cabo el <strong>15 de febrero </strong>
                en
                <strong>
                  {" "}
                  Sala de Conferencias, Edificio A, Universidad X
                </strong>
                .
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Cuenta conmigo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
