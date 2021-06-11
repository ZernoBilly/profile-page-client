import axios from "axios";

const url = "http://localhost:5000/cards";

//Api requests to server /controllers.

export const fetchCard = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) =>
  axios.patch(`${url}/${id}`, updatedCard);
export const deleteCard = (id) => axios.delete(`${url}/${id}`);

//Data exported to /actions
