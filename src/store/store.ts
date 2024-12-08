import { configureStore, Store } from "@reduxjs/toolkit";
import { authApi, authReducer } from "../app/services/auth";
import { utilApi } from "../app/services/util/util.service";
import themeReducer from "./theme.slice";

export const store: Store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    [utilApi.reducerPath]: utilApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(utilApi.middleware),
});
