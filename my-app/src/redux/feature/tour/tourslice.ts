import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

export interface ITour {
  id: string;
  bookName: string;
  writer: string;
  publicationDate?: string | undefined;
  description: string;
  priority: "Low" | "Medium" | "High";
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
    addtour: (state, action: PayloadAction<ITour>) => {
      state.tour.push(action.payload);
    },
  },
});



export const { addtour } = taskSlice.actions;
export const selectTasks = (state: RootState) => {
  return state.todo.tour;

}

export default taskSlice.reducer;
