import React, { useEffect } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import Car from "../components/Car";
import { listCars } from "../actions/carActions";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const carList = useSelector((state) => state.carList);
  const { loading, error, cars } = carList;

  useEffect(() => {
    dispatch(listCars());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="error">{error}</MessageBox>
      ) : (
        <div className="row center">
          {cars.map((car) => (
            <Car key={car._id} car={car}></Car>
          ))}
        </div>
      )}
    </div>
  );
}
