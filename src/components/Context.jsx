import React, { createContext, useEffect, useRef, useState } from "react";

export const userContext = createContext();
const Context = ({ children }) => {
  const [data, setData] = useState({})
  
  useEffect(() => {
    fetch("https://dummyjson.com/products/1")
      .then((res) => res.json())
      .then((json)=>(setData(json))
      );
  }, []);

  return (
    <div>
      <userContext.Provider value={data}>{children}</userContext.Provider>
    </div>
  );
};

export default Context;
