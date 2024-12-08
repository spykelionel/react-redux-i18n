import { MessageCardProps } from "@/types";
import { motion } from "framer-motion";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const successMessage = "Data has been saved successfully";
const SuccessCard = ({
  message = successMessage,
  action,
}: MessageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray/10 flex items-center justify-center p-4 w-full"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 text-green">
            <FaCheckCircle className="w-16 h-16" />
          </div>
          <h2 className="text-2xl font-semibold text-gray mb-2">Success!</h2>
          <p className="text-gray/60">{message}</p>

          {/* Optional: Add a button to close or navigate away */}
          <button
            onClick={action}
            className="mt-6 px-6 py-2 bg-green text-white rounded-md hover:bg-green/60 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessCard;
