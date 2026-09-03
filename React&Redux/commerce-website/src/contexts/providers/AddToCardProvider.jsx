import { useReducer } from "react";
import { AddCardContext } from "../Context";

const initialState = {
  userId: 1,
  cardsItems: [],
};

const AddCardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {

    case "ADD_TO_CART":
      const existingItem = state.cardsItems.find(
        item => item.id === payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cardsItems: state.cardsItems.map(item =>
            item.id === payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cardsItems: [...state.cardsItems, { ...payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cardsItems: state.cardsItems.filter(
          (item) => item.id !== payload
        ),
      };

    case "ADD_QUANTITY":
      return {
        ...state,
        cardsItems: state.cardsItems.map((item) =>
          item.id === payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cardsItems: state.cardsItems.map((item) =>
          item.id === payload
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ),
      };

    default:
      return state;
  }
};

export const AddCardProvider = ({ children }) => {
  const [cardsState, cardsDispatch] = useReducer(
    AddCardReducer,
    initialState
  );

  return (
    <AddCardContext.Provider value={{ cardsState, cardsDispatch }}>
      {children}
    </AddCardContext.Provider>
  );
};
