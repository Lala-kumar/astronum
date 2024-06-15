import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../context/MyContext";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import pic from "../../assets/callprofile.png";
import { Tag } from "antd";

const Astrologers = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState({});

  const { astrologer, availabilityStatus } = useContext(MyContext);

  const HandleCall = async (id) => {
    if (user) {
      try {
        setLoading((prevState) => ({ ...prevState, [id]: true }));
        const response = await fetch(
          import.meta.env.VITE_SERVER_URL + `api/users/sendRequest`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.access_token}`,
            },
            body: JSON.stringify({ astroid: id, id: user.userId }),
          }
        );

        if (!response.ok) {
          throw new Error("Error Calling!");
        }

        const data = await response.json();

        if (data.status === "success") {
          message.success("Request sent!");
        } else {
          message.error("Something went wrong");
        }
        setLoading((prevState) => ({ ...prevState, [id]: false }));
      } catch (error) {
        console.error(error.message);
        setLoading((prevState) => ({ ...prevState, [id]: false }));
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <main className="px-2 md:px-12 lg:px-20 pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {astrologer.map((astro) => {
          const isOnline = availabilityStatus[astro.id] === "online";

          return (
            <section
              className="h-36 w-full mx-auto rounded-md flex"
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
              key={astro.id}
            >
              <div className="m-1 w-full">
                <img
                  src={
                    astro.image
                      ? import.meta.env.VITE_SERVER_URL +
                        `images/${astro.image}`
                      : pic
                  }
                  alt="image"
                  className="rounded-full w-20 h-20 m-1 object-cover object-center"
                />

                {/* Active Status */}
                <div className="pl-5 relative">
                  {isOnline ? (
                    <>
                      <span className="absolute bottom-6 left-16 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                      </span>
                      <Tag color="green">Online</Tag>
                    </>
                  ) : (
                    <Tag color="red">Offline</Tag>
                  )}
                </div>
              </div>

              <div className="m-1 w-full">
                <p
                  className="mb-1 cursor-pointer hover:text-gray-500"
                  onClick={() => navigate(`/astrologer/${astro.id}`)}
                >
                  {astro.name}
                </p>
                <p className="mb-1 text-xs text-gray-500">Vedic</p>
                <p className="text-sm mb-1 text-gray-600 text-ellipsis overflow-hidden">
                  {astro.languages_get ? astro.languages_get : "Hindi"}
                </p>
                <p className="text-gray-600 mb-1 text-sm">
                  Exp: {astro.experience ? astro.experience : "0"} Year
                </p>
                <p className="text-sm">
                  <span className="text-rose-600 font-bold">FREE</span>
                  <span className="line-through text-xs">10/min</span>
                </p>
              </div>

              <div className="right-div flex flex-col">
                {loading[astro.id] ? (
                  <button
                    disabled
                    className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-7 py-1"
                  >
                    <LoadingOutlined />
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!isOnline}
                    onClick={() => HandleCall(astro.id)}
                    className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-6 py-1"
                  >
                    Call
                  </button>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Astrologers;
