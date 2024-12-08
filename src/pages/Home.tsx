// src/App.tsx
import { RootState } from "@/app/types";
import { setTheme } from "@/store/theme.slice";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const toggleTheme = () => {
    dispatch(setTheme(!darkMode));
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray" : "bg-white"} text-white`}
    >
      <div className="container mx-auto px-6 py-12">
        {/* Title and Description with Fade-in Animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {t("landing.title")}
          </motion.h1>
          <motion.p
            className="text-xl mb-6"
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {t("landing.description")}
          </motion.p>

          {/* Theme Toggle Button */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
              onClick={toggleTheme}
            >
              {darkMode ? t("landing.lightMode") : t("landing.darkMode")}
            </button>
          </motion.div>

          {/* Language Switcher */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <button
              className="px-6 py-2 mr-4 bg-green text-white rounded-md"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-md"
              onClick={() => changeLanguage("fr")}
            >
              Français
            </button>
          </motion.div>
        </motion.div>

        {/* Logo Fade-in */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.img
            src="https://via.placeholder.com/150" // Replace with your CDN logo URL
            alt="Logo"
            className="mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Feature Cards with Slide-in Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="p-6 bg-blue-500 text-white rounded-lg shadow-md"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold">
              {t("landing.feature1.title")}
            </h2>
            <p>{t("landing.feature1.description")}</p>
          </motion.div>
          <motion.div
            className="p-6 bg-green text-white rounded-lg shadow-md"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="text-2xl font-semibold">
              {t("landing.feature2.title")}
            </h2>
            <p>{t("landing.feature2.description")}</p>
          </motion.div>
          <motion.div
            className="p-6 bg-yellow-500 text-white rounded-lg shadow-md"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2 className="text-2xl font-semibold">
              {t("landing.feature3.title")}
            </h2>
            <p>{t("landing.feature3.description")}</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
