import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import { serverApi } from "./api/index";

export default configureStore({
  reducer: { auth: auth, [serverApi.reducerPath]: serverApi.reducer },
});
