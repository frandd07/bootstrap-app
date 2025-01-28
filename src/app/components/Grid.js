import "bootstrap/dist/css/bootstrap.min.css";
export default function Grid() {
  return (
    <div className="container">
      <h2 className="text-center">Ejercicio 2</h2>
      <div className="row">
        <div className="col-md-3">Columna 1 (3 columnas)</div>
      </div>
      <div className="row">
        <div className="col-md-8">Columna 1 (8 columnas)</div>
        <div className="col-md-4">Columna 1 (4 columnas)</div>
      </div>
    </div>
  );
}
