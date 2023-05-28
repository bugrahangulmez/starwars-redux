import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./swapiSlice";
import detailReducer from "./detailSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
    detail: detailReducer,
  },
});
