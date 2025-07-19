import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { IUser } from "@/interface.types";

interface InitialState {
  users: IUser[];
}

const initialState: InitialState = {
  users: [
    { id: "201", name: "Alice" },
    { id: "202", name: "Bob" }
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<{ name: string }>) {
      state.users.push({
        id: nanoid(),
        name: action.payload.name,
      });
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export actions
export const { addUser, deleteUser } = userSlice.actions;

// Selector
export const selectUsers = (state: RootState) => state.user.users;

// Export reducer
export default userSlice.reducer;
