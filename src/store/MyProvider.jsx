/* eslint-disable react/prop-types */
import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
