import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stringifyUrl } from "query-string";

export const tryAuthAsync = createAsyncThunk(
  "auth/getJwt",
  async (data: { user: string; password: string }, thunkAPI) => {
    const { user, password } = data;
    if (user && password) {
      const url = stringifyUrl({
        url: `${process.env.REACT_APP_SERVER_URL}/auth/try`,
        query: { user: user, password: password },
      });
      const jwt = (await axios.get(url)).data;
      localStorage.setItem("token", jwt);
      return jwt;
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { jwt: localStorage.getItem("token") || "" },
  reducers: {
    logout: (state) => {
      localStorage.setItem("token", "");
      state.jwt = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tryAuthAsync.fulfilled, (state, action) => {
      state.jwt = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
