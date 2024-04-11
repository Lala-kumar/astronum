import React from "react";
import { Divider, Steps } from "antd";
import { useState, useEffect } from "react";

const App = () => {
  // Function to get the date for the next 6 days
  const getNextDays = () => {
    const today = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const nextDays = [];

    const [isHorizontal, setIsHorizontal] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => {
        setIsHorizontal(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      const dayOfWeek = days[nextDate.getDay()];
      const dayOfMonth = nextDate.getDate();
      nextDays.push(`${dayOfWeek}, ${dayOfMonth}`);
    }
    return nextDays;
  };

  const nextDays = getNextDays();
  const isHorizontal = window.innerWidth >= 1024;

  return (
    <div className="my-8 py-8 rounded-md w-full mx-auto">
      <h1 className="mb-6 text-xl font-bold">Check Online Availability</h1>
      <section className="mx-auto border border-pink-300 rounded-md p-4 py-12">
        <Steps
          direction={isHorizontal ? "horizontal" : "vertical"}
          progressDot
          className="content-center mx-auto"
          current={7}
          items={nextDays.map((day, index) => ({
            title: <p>{day}</p>,
            description: (
              <p className="max-w-64  bg-white">
                {index % 2 === 0 ? (
                  <p className="text-center rounded-full py-1 mx-2 border text-green-500 border-green-500">
                    Available
                  </p>
                ) : (
                  <p className="text-center rounded-full py-1 mx-2 border text-red-500 border-red-500">
                    Not Available
                  </p>
                )}
              </p>
            ),
          }))}
        />
      </section>
    </div>
  );
};

export default App;
