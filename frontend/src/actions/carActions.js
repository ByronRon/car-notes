import axios from "axios";
import {
  CAR_LIST_FAIL,
  CAR_LIST_REQUEST,
  CAR_LIST_SUCCESS,
} from "../constants/carConstants";

export const listCars = () => async (dispatch) => {
  dispatch({
    type: CAR_LIST_REQUEST,
  });
  try {
    const { data } = await axios.get("/api/cars");
    dispatch({
      type: CAR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CAR_LIST_FAIL,
      payload: error.message,
    });
  }
};
