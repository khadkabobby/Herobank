import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`py-4 px-6 text-primary bg-blue-gradient font-poppins font-medium text-[18px] outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
