import React from "react";
import Button from "./Button";

function Card({ user }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-4 shadow-lg max-w-xs">
      <img
        src={user.image}
        alt={`${user.name}'s thumbnail`}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.designation}</p>
      </div>
      <Button name={user.name} />
    </div>
  );
}

export default Card;
