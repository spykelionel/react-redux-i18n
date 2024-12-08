import { MessageCardProps } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const errorMessage = "Something went wrong. Please try again.";
const ErrorCard = ({ message = errorMessage, action }: MessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray/10 flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-red/90">
            <FaTimesCircle className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-semibold text-gray/80 mb-2">Error!</h2>
          <p className="text-gray/60">{message}</p>

          {/* Optional: Add buttons to retry or go back */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={action}
              className="px-6 py-2 bg-red/90 text-white rounded-md hover:bg-red/100 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ErrorCard;
