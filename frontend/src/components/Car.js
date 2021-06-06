import React from "react";
import { Link } from "react-router-dom";

export default function Car(props) {
  const { car } = props;
  return (
    <div key={car._id} className="card">
      <Link to={`/car/${car._id}`}>
        <img className="medium" src={car.image} alt={car.brand} />
      </Link>
      <div className="card-title">
        <Link to={`/car/${car._id}`}>
          <h2>
            {car.brand} - {car.model}
          </h2>
        </Link>
      </div>
      <div className="card-body">
        <div>
          <b>Motor:</b> {car.cc} cc.
        </div>
        <div>
          <b>Año: </b> {car.year}
        </div>
        <div>
          <b>Placa: </b> {car.plate}
        </div>
        <div>
          <b>Ult. Mantenimiento:</b> {car.last_service}
        </div>
      </div>
    </div>
  );
}
