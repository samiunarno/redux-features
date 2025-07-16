import type { ITour } from "@/interface.types";
import type { RootState } from "@/redux/store";

import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
  [x: string]: unknown;
  tour: ITour[];
}
const initialState: InitialState = {
  tour: [
    {
      id: "1234234",
      title: "These is a New Task",
      description: "Create Home Routes",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "9876543",
      title: "Landing Page Design",
      description: "Design a responsive landing page for the new product",
      dueDate: "2025-08",
      isCompleted: true,
      priority: "Low",
    },
    {
      id: "9876544",
      title: "UI/UX Design",
      description: "Design a responsive landing page for the new product",
      dueDate: "2025-08",
      isCompleted: true,
      priority: "Medium",
    }

    
  ],
};

const taskSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
});

export const selectTasks = (state : RootState) => {
  return state.todo.tour
};



export default taskSlice.reducer;
