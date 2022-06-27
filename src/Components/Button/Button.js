import React from "react";

const Button = ({ onClick = () => {}, full, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 rounded-lg bg-[#cc0850] text-white font-medium ${
        full ? "w-full" : ""
      }  mt-auto`}
    >
      {children}
    </button>
  );
};

export default Button;
