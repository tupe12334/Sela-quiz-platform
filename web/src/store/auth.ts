import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    tryAuth: (state, action) => {
      const { user, password } = action.payload;
      if (user && password) {
        // axios.post();
      }
    },
  },
});

export const { tryAuth } = authSlice.actions;

export default authSlice.reducer;
