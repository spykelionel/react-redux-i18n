import "@/assets/styles/base.css";
import "@/lib/i18n";
import { AppProvider } from "@/providers/AppProvider";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")! as HTMLElement).render(
  <StrictMode>
    <AppProvider />
  </StrictMode>
);
