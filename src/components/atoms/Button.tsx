import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  title: string;
  action?: () => void;
  to?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?:
    | "primary"
    | "green"
    | "gray"
    | "black"
    | "lightGray"
    | "dark"
    | "orange"
    | "red"
    | "pink"
    | "disabled";
  animated?: boolean;
  width?: string;
  disabled?: boolean;
};

export const AppButton = ({
  title,
  action,
  to,
  icon,
  type,
  variant = "primary",
  animated = false,
  width,
  disabled = false,
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-primary",
    green: "bg-green",
    gray: "bg-gray",
    black: "bg-black",
    lightGray: "bg-light-gray",
    dark: "bg-dark",
    orange: "bg-orange",
    red: "bg-red",
    pink: "bg-pink",
    disabled: "bg-gray/10 text-gray/60",
  };

  const buttonClasses = `flex justify-center gap-2 ${
    width ?? "w-full"
  } text-white hover:${variantStyles[variant]}/90 items-center py-2 px-8 rounded-md text-md font-semibold ${
    variantStyles[variant]
  } ${disabled ? "opacity-50 pointer-events-none cursor-not-allowed" : ""}`;

  const content = (
    <>
      {icon} {title}
    </>
  );

  if (to) {
    return animated ? (
      <motion.div whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.95 }}>
        <Link to={to} className={buttonClasses} tabIndex={disabled ? -1 : 0}>
          {content}
        </Link>
      </motion.div>
    ) : (
      <Link to={to} className={buttonClasses} tabIndex={disabled ? -1 : 0}>
        {content}
      </Link>
    );
  }

  return animated ? (
    <motion.button
      onClick={action}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.95 }}
      type={type || "button"}
      className={buttonClasses}
      disabled={disabled}
    >
      {content}
    </motion.button>
  ) : (
    <button
      onClick={action}
      type={type || "button"}
      className={buttonClasses}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
