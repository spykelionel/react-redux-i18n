import Layout from "@/components/partials/Layout";
import NotFound from "@/components/partials/NotFound";
import ForgotPassword from "@/features/auth/pages/ForgotPassword";
import { LoginPage } from "@/features/auth/pages/Login";
import { RegisterPage } from "@/features/auth/pages/Register";
import ResetPassword from "@/features/auth/pages/ResetPassword";
import Home from "@/pages/Home";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />,
        errorElement: <NotFound />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
  {
    path: "register",
    element: <RegisterPage />,
    errorElement: <NotFound />,
  },
  // ...spread other routes
  {
    path: "*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);

export const AppRouter: React.FC = () => <RouterProvider router={router} />;
