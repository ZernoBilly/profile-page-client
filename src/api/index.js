import axios from "axios";

const url = "http://localhost:5000/cards";

export const fetchCard = () => axios.get(url);
export const createCard = (newCard) => axios.post(url, newCard);
export const updateCard = (id, updatedCard) =>
  axios.patch(`${url}/${id}`, updatedCard);

//Data exported to /actions
