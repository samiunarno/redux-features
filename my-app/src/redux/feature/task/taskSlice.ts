import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    id: "2342353425",
    title: "Initial the Frontend ",
    description: "Yo looks",
    dueDate: "2025-11",
    isCompleted: false,
    priority: "Medium",
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // You can define actions here later if needed
  },
});

// ✅ Export ONLY the reducer, not the full slice
export default taskSlice.reducer;
