import { configureStore } from '@reduxjs/toolkit';
import groceryListReducer from "../features/groceryListSlice"

export default configureStore({
  reducer: {
    groceryListReducer: groceryListReducer
  },
});
