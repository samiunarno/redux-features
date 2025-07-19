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
      isCompleted: false,
      
    },
    {
      id: "2",
      title: "Read Typescript Docs",
      description: "Understand advanced TypeScript types",
      dueDate: "2025-07-25",
      priority: "Medium",
      isCompleted: false,
      
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

    toggleCompleteState : (state, action: PayloadAction<string>) => {
      state.tour.forEach((task)=> task.id===action.payload
      ?task.isCompleted = !task.isCompleted : task)
    },

    deleteTask : (state, action: PayloadAction<string>) => {
      state.tour =  state.tour.filter((task) => task.id !== action.payload)
    },

    updateFilters : (state, action: PayloadAction<"all" | "low" | "medium" | "high">) => {
      state.filter = action.payload;
    },

    
  },
});

// Actions export
export const { addtour, toggleCompleteState , deleteTask, updateFilters } = taskSlice.actions;

// Selector export
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if(filter === "low"){
    return state.todo.tour.filter((task) => task.priority ==="Low")
  }
  else if (filter === "medium"){
    return state.todo.tour.filter((task) => task.priority=== "Medium")
  }
  else if (filter === "high"){
    return state.todo.tour.filter((task) => task.priority=== "High")
  }

  return state.todo.tour
}

export const selectFilter = (state: RootState) => state.todo.filter;

// Reducer export
export default taskSlice.reducer;
