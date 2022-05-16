import React, { useContext, useState, createContext } from "react";

export const globalVariablesContext = createContext();



export default function VariablesContext({ children }) {
  
    const [windowsWidth, setWindowsWidth] = useState(null)

    const [navbarHeight, setNavbarHeight] = useState(null)


  return (
    <globalVariablesContext.Provider value={{windowsWidth, setWindowsWidth, navbarHeight, setNavbarHeight}}>
      {children}
    </globalVariablesContext.Provider>
  );
}
