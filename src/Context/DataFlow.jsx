import React, { createContext, useContext, useState } from "react";

const DataFlowContext = createContext();

export const useDataFlowContext = () => useContext(DataFlowContext);

function DataFlowProvider({ children }) {
  let firstName = "Oindil Golder";

  const [darkMode, setDarkMode] = useState(false);

  const value = {
    firstName,
    darkMode,
    setDarkMode,
  };

  return (
    <DataFlowContext.Provider value={value}>
      {children}
    </DataFlowContext.Provider>
  );
}

export default DataFlowProvider;
