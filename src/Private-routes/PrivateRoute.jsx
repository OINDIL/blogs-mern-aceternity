import React, { useState } from "react";

function PrivateRoute({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn === true) {
    return children;
  } else {
    return (
      <div className="text-red-600 ">
        <p className="text-8xl">🔐 Not authorized</p>
        <button
          className="bg-slate-800 rounded-full px-4 py-1 text-white"
          onClick={() => setLoggedIn(true)}
        >
          Log In
        </button>
      </div>
    );
  }
}

export default PrivateRoute;
