import type { RootState } from "@/redux/store";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

export interface ITour {
  id: string;
  bookName: string;
  writer: string;
  publicationDate?: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  // Add this if you want to track completion status:
  // isCompleted?: boolean;
}

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
    addtour: (state,action: PayloadAction<ITour>)=>{
      const id = "sdfgfdgdfgdfgdf";
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tour.push(taskData)
    }
  },
});

export const { addtour } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.todo.tour; // Note: your slice is named "tour" so root state key should match

export default taskSlice.reducer;
