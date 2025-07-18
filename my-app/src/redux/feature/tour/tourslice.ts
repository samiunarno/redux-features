// src/redux/slices/taskSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Tour item এর টাইপ
export interface ITour {
  id: string;
  bookName: string;
  writer: string;
  publicationDate?: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
}

// স্টেট টাইপ
interface InitialState {
  tour: ITour[];
}

const initialState: InitialState = {
  tour: [],
};

const taskSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    // নতুন ট্যুর যোগ করা
    addtour(state, action: PayloadAction<ITour>) {
      state.tour.push(action.payload);
    },

    // ট্যুরের completed স্টেট টগল করা
    toggleCompleteState(state, action: PayloadAction<string>) {
      const id = action.payload;
      const tour = state.tour.find((t) => t.id === id);
      if (tour) {
        tour.completed = !tour.completed;
      }
    },
  },
});

// Actions export
export const { addtour, toggleCompleteState } = taskSlice.actions;

// Selector export
export const selectTasks = (state: RootState) => state.todo.tour;

// Reducer export
export default taskSlice.reducer;
