// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const NotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-slate-300 py-20">
        <h1 className="text-9xl font-extrabold text-red">404</h1>
        <p className="text-2xl font-semibold text-red mt-4">Page Not Found</p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-primary text-white text-md font-medium rounded-md hover:bg-primary transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
