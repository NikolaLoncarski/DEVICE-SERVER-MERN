import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [themeMode, setThemeMode] = useState(null);
  const [apiData, setApiData] = useState(null);
  return (
    <AppContext.Provider
      value={{ auth, setAuth, themeMode, setThemeMode, apiData, setApiData }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
