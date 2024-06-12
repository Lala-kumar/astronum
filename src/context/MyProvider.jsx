/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [astrologer, setAstrologer] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
 

  // ********************** All Astrologers Section  **********************
  const fetchAllAstrologers = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/searchAstro",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setAstrologer(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllAstrologers();
  }, []);

  return (
    <MyContext.Provider
      value={{ user, setUser, astrologer, setAstrologer, token }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
