import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.REACT_APP_URL;

//Api requests to server /controllers.

export const fetchCard = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) =>
  axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);

//Data exported to /actions
