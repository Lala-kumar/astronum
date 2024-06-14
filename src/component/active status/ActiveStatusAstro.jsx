import { useEffect } from "react";

const astro = JSON.parse(localStorage.getItem("astro"));

const SendStatus = () => {
  useEffect(() => {
    const sendActiveStatus = async () => {
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

        const data = await response.json();
        console.log(data, "status");
      } catch (error) {
        console.error(error.message);
      }
    };

    const updateStatus = () => {
      sendActiveStatus();
    };

    updateStatus();

    const intervalId = setInterval(() => {
      updateStatus();
    }, 3 * 60 * 1000); // 3 minutes

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, []);

  return <div></div>;
};

export default SendStatus;
