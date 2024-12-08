import { AppRouter } from "@/router/Router";
import { store } from "@/store/store";

import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export const AppProvider = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer />
    </Provider>
  );
};
