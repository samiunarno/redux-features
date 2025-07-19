// src/redux/slices/taskSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";


export interface ITour {
  id: string;
  bookName: string;
  writer: string;
  publicationDate?: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  completed: boolean;
}

interface InitialState {
  tour: ITour[];
  filter : "all" | "high" | "medium" | "low"
}

const initialState: InitialState = {
  tour: [
    {
      id: "1",
      bookName: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      description: "A novel about the American dream.",
      priority: "High",
      completed: false
    },
    {
      id: "1",
      bookName: "The Great Gatsby",
      writer: "F. Scott Fitzgerald",
      publicationDate: "1925-04-10",
      description: "A novel about the American dream.",
      priority: "High",
      completed: false
    }
  ],
  filter: "all"
};

const taskSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {

    addtour(state, action: PayloadAction<ITour>) {
      state.tour.push(action.payload);
    },

  toggleCompleteState(state, action: PayloadAction<string>) {
    console.log(action);
    state.tour.forEach((task) => {
    if (task.id === action.payload) {
      (task.completed = !task.completed)
    }
  });
}

  },
});

// Actions export
export const { addtour, toggleCompleteState } = taskSlice.actions;

// Selector export
export const selectTasks = (state: RootState) =>{
  return state.todo.tour;
} 

export const selectFilter = (state:RootState) => {
  return state.todo.filter
}

// Reducer export
export default taskSlice.reducer;
