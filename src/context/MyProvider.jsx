/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [astrologer, setAstrologer] = useState([]);
  const [allSpecialization, setAllSpecialization] = useState([]);
  const [allLanguage, setAllLanguage] = useState([]);
  const [notification, setNotification] = useState([]);
  const [availabilityStatus, setAvailabilityStatus] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const login = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("astro");
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("astro");
  };

  // ********************** All Notification Section  **********************
  const fetchNotification = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/viewacceptrequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.access_token}`,
          },
          body: JSON.stringify({ userID: user?.userID }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Fetching All Astrologer!");
      }

      const data = await response.json();

      if (data.status === "success") {
        setNotification(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********************** All Astrologers Section  **********************
  const fetchAllAstrologers = async () => {
    let url = import.meta.env.VITE_SERVER_URL + "api/users/searchAstro";

    if (selectedSpecialization !== "") {
      url =
        import.meta.env.VITE_SERVER_URL +
        `api/users/searchAstro/${selectedSpecialization}`;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

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

  // ********************** Availability Status Section  **********************
  const checkStatus = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `api/users/checkOnline`
      );

      if (!response.ok) {
        throw new Error("Error Getting Availability Status!");
      }

      const data = await response.json();
      setAvailabilityStatus(data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********************** Transaction Section  **********************
  const fetchTransaction = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/wallethistroy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.access_token}`,
          },
          body: JSON.stringify({ userId: user?.userID }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Fetching All Transaction!");
      }

      const data = await response.json();

      if (data.status === "success") {
        setTransaction(data.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const ReloadAllAstro = () => {
    fetchAllAstrologers();
  };

  const ReloadTransaction = () => {
    fetchTransaction();
  };

  useEffect(() => {
    fetchAllAstrologers();
    fetchAllSpecialization();
    fetchAllLanguage();
    checkStatus();
  }, []);

  useEffect(() => {
    fetchAllAstrologers();
  }, [selectedSpecialization]);

  useEffect(() => {
    fetchNotification();
    fetchTransaction();
  }, [user?.status === "success"]);

  useEffect(() => {
    const interval = setInterval(() => {
      checkStatus();
    }, 3 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MyContext.Provider
      value={{
        userData,
        setUserData,
        astrologer,
        setAstrologer,
        allSpecialization,
        setAllSpecialization,
        allLanguage,
        setAllLanguage,
        ReloadAllAstro,
        notification,
        setNotification,
        login,
        logout,
        availabilityStatus,
        setAvailabilityStatus,
        transaction,
        setTransaction,
        ReloadTransaction,
        selectedSpecialization,
        setSelectedSpecialization,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
