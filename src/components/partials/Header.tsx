// src/components/Header.tsx
import { useAuth, useLogout } from "@/hooks";
import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { invokeLogout } = useLogout();

  return (
    <header className="bg-white shadow-sm text-center text-dark ">
      Navbar
    </header>
  );
};

export default Header;
