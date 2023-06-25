import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [themeMode, setThemeMode] = useState(null);

  return (
    <AppContext.Provider value={{ auth, setAuth, themeMode, setThemeMode }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
