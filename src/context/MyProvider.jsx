/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [astrologer, setAstrologer] = useState([]);
  const [allSpecialization, setAllSpecialization] = useState([]);
  const [allLanguage, setAllLanguage] = useState([]);

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

      if (!response.ok) {
        throw new Error("Error Fetching All Astrologer!");
      }

      const data = await response.json();

      if (data.status === "success") {
        setAstrologer(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********************** All Specialization Section  **********************
  const fetchAllSpecialization = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/allSpecialization"
      );

      if (!response.ok) {
        throw new Error("Error Fetching All Specialization!");
      }

      const data = await response.json();

      if (data.status === "success") {
        setAllSpecialization(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********************** All Language Section  **********************
  const fetchAllLanguage = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/allLanguages"
      );

      if (!response.ok) {
        throw new Error("Error Fetching All Language!");
      }

      const data = await response.json();

      if (data.status === "success") {
        setAllLanguage(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const ReloadAllAstro = () => {
    fetchAllAstrologers();
  };

  useEffect(() => {
    fetchAllAstrologers();
    fetchAllSpecialization();
    fetchAllLanguage();
  }, []);

  return (
    <MyContext.Provider
      value={{
        user,
        setUser,
        astrologer,
        setAstrologer,
        allSpecialization,
        setAllSpecialization,
        allLanguage,
        setAllLanguage,
        ReloadAllAstro,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
