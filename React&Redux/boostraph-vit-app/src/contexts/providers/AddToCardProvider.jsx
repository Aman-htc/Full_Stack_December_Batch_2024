import { useReducer } from "react";
import { AddCardContext } from "../Context";

const initialState = {
  userId: 1,
  cardsItems: [],
};

const AddCardReducer = (state, action) => {
  
  const { type, payload } = action;

  switch (type) {

    case "ADD_TO_CARD":
      const existingItem = state.cardsItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        return {
          ...state,
          cardsItems: state.cardsItems.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return {
        ...state,
        cardsItems: [...state.cardsItems, { ...action.payload, quantity: 1 }],
      };


    case "REMOVE_FROM_CARD":
      return {
        ...state,
        cardsItems: state.cardsItems.filter(
          (item) => item.id !== payload
        ),
      };
    case 'ADD_QUANTITY':
      return {
        ...state,
        cardsItems: state.cardsItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        ),
      };
    case 'INCRESE_QUANTITY':
      return {

        ...state,
        cardsItems: state.cardsItems.map((item) =>
          item.id === action.payload ? { ...item, quantity: (item.quantity > 1)? item.quantity - 1: 1 } : item
        ),
      };



    default:
      return state;
  }
};

const AddToCardProvider = ({ children }) => {
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

export default AddToCardProvider;
