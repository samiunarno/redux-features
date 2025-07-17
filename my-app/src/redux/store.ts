import { configureStore } from "@reduxjs/toolkit";

import tourReducer from "./feature/tour/tourslice";
import taskReducer from "./feature/task/taskSlice";

export const store = configureStore({
  reducer: {
    
    todo: tourReducer,
    Tasks : taskReducer,
  },
});

// console.log(tourReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
