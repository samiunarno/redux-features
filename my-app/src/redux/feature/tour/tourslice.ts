import type { ITour } from "@/interface.types";

import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tour: ITour[];
}
const initialState: InitialState = {
  tour: [
    {
      id: "1234234",
      title: "New Tour",
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
      priority: "Medium",
    },
  ],
};

const todoSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
