export default (cards = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...cards, action.payload];
    case "UPDATE":
      return cards.map((card) =>
        card._id === action.payload._id ? action.payload : card
      );
    default:
      return cards;
  }
};
