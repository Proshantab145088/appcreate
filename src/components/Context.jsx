import React, { createContext } from "react";

export const userContext = createContext();
const Context = ({children}) => {
  return <div>
    <userContext.Provider value={'hhfhhff'}>{children}</userContext.Provider>
  </div>;
};

export default Context;
