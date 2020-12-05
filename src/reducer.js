export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_CART":
      const index = state.basket.findIndex((item) => item.id === action.id);
      const newBasket = [...state.basket];

      if (index > -1) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product ${action.id}`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY_CART":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
