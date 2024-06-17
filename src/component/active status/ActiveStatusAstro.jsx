/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

const SendStatus = () => {
  const astro = JSON.parse(localStorage.getItem("astro"));
  console.log(astro, "Send astro online");

  useEffect(() => {
    const sendActiveStatus = async () => {
      if (!astro) return; // Check if astro is available

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
        // console.log(data, "Astro Status sent to the server");
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
    }, 10 * 1000);

    return () => clearInterval(intervalId);
  }, [astro]);

  return <div></div>;
};

export default SendStatus;
