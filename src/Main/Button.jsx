import React from "react";
import Header from "./Header";

const Button = ({ name }) => {
  return (
    <div className="bg-slate-800 rounded-full px-4 py-1 text-white">
      {name}
      <Header name={name} />
    </div>
  );
};

export default Button;
