import * as api from "../api";

// Action Creators
export const getCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCard();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCard = (card) => async (dispatch) => {
  try {
    const { data } = await api.createCard(card);

    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
