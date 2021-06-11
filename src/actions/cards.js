import * as api from "../api";

//Actions

//Get all Project Cards
export const getCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCard();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Create new Project Card
export const createCard = (card) => async (dispatch) => {
  try {
    const { data } = await api.createCard(card);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Update Project Card
export const updateCard = (id, card) => async (dispatch) => {
  try {
    const { data } = await api.updateCard(id, card);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//Delete Project Card
export const deleteCard = (id) => async (dispatch) => {
  try {
    await api.deleteCard(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

//Dispatch exported to ./reducers
