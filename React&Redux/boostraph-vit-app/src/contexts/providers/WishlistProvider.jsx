import { useReducer } from "react";
import { WishlistContext } from "../Context";

const initialState = {
  userId: 1,
  wishlistItems: [],
};

const WishlistReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, payload],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(
          (item) => item.id !== payload
        ),
      };

    default:
      return state;
  }
};

const WishlistProvider = ({ children }) => {
  
  const [wishlistState, wishlistDispatch] = useReducer(
    WishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider
      value={{ wishlistState, wishlistDispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
