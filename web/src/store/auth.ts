import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { stringifyUrl } from "query-string";

export const authSlice = createSlice({
  name: "auth",
  initialState: { jwt: "" },
  reducers: {
    tryAuth: (state, action) => {
      const { user, password } = action.payload;
      if (user && password) {
        const url = stringifyUrl({
          url: `${process.env.REACT_APP_SERVER_URL}/auth/try`,
          query: { user: user, password: password },
        });
        axios
          .post(url)
          .then((response) => {
            return response.data;
          })
          .then((jwt: string) => {
            console.log(jwt);
            state.jwt = jwt;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});

export const { tryAuth } = authSlice.actions;

export default authSlice.reducer;
