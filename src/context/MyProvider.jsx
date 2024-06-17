/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [astroData, setAstroData] = useState();
  const [userData, setUserData] = useState();
  const [astrologer, setAstrologer] = useState([]);
  const [allSpecialization, setAllSpecialization] = useState([]);
  const [allLanguage, setAllLanguage] = useState([]);
  const [notification, setNotification] = useState([]);
  const [availabilityStatus, setAvailabilityStatus] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const astro = JSON.parse(localStorage.getItem("astro"));

  const login = (userData) => {
    setUserData(userData);
  };

  const astroLogin = (astroData) => {
    setAstroData(astroData);
  };

  const logout = () => {
    setUserData(null);
    setAstroData(null);
    localStorage.removeItem("user");
    localStorage.removeItem("astro");
  };

  // ********************** Send Active Status **********************
  const sendActiveStatus = async () => {
    if (!astro) return;
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/astro/astrLoginInsert",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${astro?.access_token}`,
          },
          body: JSON.stringify({ astroId: astro?.userID }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Sending Status!!");
      }

      // const data = await response.json();
      // console.log(data, "Astro Status send to the server");
    } catch (error) {
      console.error(error.message);
    }
  };

  // ********************** Wallet Balance Section  **********************
  const fetchWalletBalce = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/walletAmount",
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
        throw new Error("Error Fetching Balance!");
      }

      const data = await response.json();

      setWalletBalance(data.walletCurrBalnce);
    } catch (error) {
      console.error(error.message);
    }
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

      if (data?.status === "success") {
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

      if (data?.status === "success") {
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

  const ReloadCheckStatus = () => {
    checkStatus();
  };

  useEffect(() => {
    fetchAllAstrologers();
  }, [selectedSpecialization]);

  useEffect(() => {
    fetchNotification();
    fetchTransaction();
    fetchWalletBalce();
  }, [user?.status === "success"]);

  useEffect(() => {
    const interval = setInterval(() => {
      checkStatus();
    }, 3 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (astro) {
      sendActiveStatus();
      const intervalId = setInterval(() => {
        sendActiveStatus();
      }, 3 * 60 * 1000);

      return () => clearInterval(intervalId);
    }
  }, [astro]);

  return (
    <MyContext.Provider
      value={{
        userData,
        setUserData,
        astroData,
        setAstroData,
        astroLogin,
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
        astro,
        user,
        ReloadCheckStatus,
        walletBalance,
        setWalletBalance,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
