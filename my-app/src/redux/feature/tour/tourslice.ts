// src/redux/slices/taskSlice.ts

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { ITour } from "@/interface.types";

interface InitialState {
  tour: ITour[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tour: [
    {
      id: "1",
      title: "Finish Redux Slice",
      description: "Create task management with Redux Toolkit",
      dueDate: "2025-07-20",
      priority: "High",
      isCompleted: true,
      bookName: ""
    },
    {
      id: "2",
      title: "Read Typescript Docs",
      description: "Understand advanced TypeScript types",
      dueDate: "2025-07-25",
      priority: "Medium",
      isCompleted: true,
      bookName: ""
    }
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {
    addtour(state, action: PayloadAction<ITour>) {
      state.tour.push(action.payload);
    },

    toggleCompleteState(state, action: PayloadAction<string>) {
      state.tour.forEach((task)=> task.id===action.payload
      ?task.isCompleted = !task.isCompleted : task)
    },
  },
});

// Actions export
export const { addtour, toggleCompleteState } = taskSlice.actions;

// Selector export
export const selectTasks = (state: RootState) => state.todo.tour;

export const selectFilter = (state: RootState) => state.todo.filter;

// Reducer export
export default taskSlice.reducer;
