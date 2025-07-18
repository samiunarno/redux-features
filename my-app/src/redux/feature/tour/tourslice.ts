// src/redux/slices/taskSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Define the shape of a Tour item
export interface ITour {
  id: string;
  bookName: string;
  writer: string;
  publicationDate?: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean; // new property
}

// Define the initial state shape
interface InitialState {
  tour: ITour[];
}

// Initial state
const initialState: InitialState = {
  tour: [],
};

// Create the slice
const taskSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    // Add a new tour
    addtour: (state, action: PayloadAction<ITour>) => {
      state.tour.push(action.payload);
    },

    // Toggle the completed state of a tour item
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const tour = state.tour.find((t) => t.id === id);
      if (tour) {
        tour.completed = !tour.completed;
      }
    },
  },
});

// Export actions
export const { addtour, toggleCompleteState } = taskSlice.actions;

// Selector to get all tours
export const selectTasks = (state: RootState) => state.todo.tour;

// Export reducer
export default taskSlice.reducer;
