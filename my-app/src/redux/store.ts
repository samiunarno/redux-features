import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counter/counterslice";
import tourReducer from "./feature/tour/tourslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    tour: tourReducer,
  },
});

// console.log(tourReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
