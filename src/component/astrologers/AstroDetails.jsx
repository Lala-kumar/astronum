/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import Layout from "../layout/Layout";
// import { FaStar } from "react-icons/fa6";
import AstroAvailable from "./AstroAvailable";
import { Divider, message } from "antd";
import { HomeOutlined, LoadingOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState, useCallback } from "react";
import image from "../../assets/callprofile.png";
import { MdCall } from "react-icons/md";

const user = JSON.parse(localStorage.getItem("user"));
const AstroDetails = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [astro, setAstro] = useState({});
  const [specialization, setSpecialization] = useState([]);
  const [isOnline, setIsOnline] = useState("");

  const { id } = useParams();

  // ********************** Fetch Status Section  **********************
  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}api/users/checkAstroOnline`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.access_token}`,
          },
          body: JSON.stringify({ astroId: id }),
        }
      );

      const data = await response.json();

      setIsOnline(data.data[id]);
    } catch (error) {
      console.error(error.message);
    }
  }, [id]);

  // ********************** Astro Details Section  **********************
  const fetchAstroDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}api/users/searchAstro/${id}`
      );
      const data = await response.json();

      setAstro(data.data[0]);
      const specializationString = data.data[0]?.specialization;
      setSpecialization(
        typeof specializationString === "string"
          ? specializationString.split(",")
          : []
      );
    } catch (error) {
      console.error(error.message);
    }
  }, [id]);

  useEffect(() => {
    fetchAstroDetails();
    fetchStatus();
  }, []);

  // ********************** Handle Call Section  **********************
  const handleCall = async (id) => {
    if (user) {
      try {
        setLoading(true);
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
          message.success("Request sent Successfully!");
        } else {
          message.error("Something went wrong");
        }
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <Layout>
      <div className="h-full">
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-[#fbb62e] mb-5">
          <Breadcrumb
            className="text-gray-50"
            separator={<span style={{ color: "white" }}>&gt;</span>}
            items={[
              {
                title: (
                  <HomeOutlined
                    onClick={() => navigate("/")}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                ),
              },
              {
                title: <span className="text-white">Astro</span>,
              },
            ]}
          />
        </h1>

        <main className="mb-6 px-2 md:px-12 lg:px-20">
          <div>
            <section className="w-full border border-pink-300 rounded-md mx-auto flex lg:flex-row md:flex-row flex-col sm:flex-col m-4 bg-purple-50">
              <div className="m-1 mx-10">
                <img
                  src={
                    astro.image
                      ? import.meta.env.VITE_SERVER_URL +
                        `images/${astro.image}`
                      : image
                  }
                  alt="Astrologer"
                  className="mx-auto border rounded-full h-[200px] w-[200px] m-1 object-cover object-center"
                />
              </div>

              <div className="m-4 mx-auto">
                <p className="mb-2 text-2xl font-bold">{astro.name}</p>
                <p className="mb-2 text-md text-gray-500">
                  Vedic, Numerology, Vastu, Prashana
                </p>
                <p className="mb-2 text-gray-600">Hindi, English</p>
                <p className="text-gray-600 mb-2">
                  Exp: {astro.experience ? astro.experience : "0"} Year
                </p>
                <p className="text-gray-600 mb-2">
                  Call: {astro.callpermin ? astro.callpermin : "0"}/min
                </p>

                <Divider />
              </div>

              <div className="flex flex-col mx-10">
                {isOnline === "online" ? (
                  <>
                    <section className="m-auto mb-8">
                      <div className="hover:cursor-pointer hover:bg-green-400 hover:text-white flex border-2 border-green-400 my-auto w-64 h-12 items-center justify-center rounded-full">
                        <span className="font-semibold opacity-85 hover:text-white">
                          ACTIVE
                        </span>
                      </div>
                    </section>

                    <section
                      className="m-auto mb-8"
                      onClick={() => handleCall(astro.id)}
                    >
                      <div className="hover:cursor-pointer hover:border-green-600 hover:shadow-md  hover:text-white flex border-2 border-green-400 my-auto w-64 h-12 items-center justify-evenly rounded-full">
                        {loading ? (
                          <LoadingOutlined className="text-green-600" />
                        ) : (
                          <>
                            <div>
                              <div className="">
                                <MdCall className="text-3xl text-green-700" />
                              </div>
                            </div>

                            <div>
                              <span className="text-md opacity-80 text-green-600">
                                Start Call
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </section>
                  </>
                ) : (
                  <>
                    <section className="m-auto mb-8">
                      <div className="hover:cursor-pointer hover:bg-rose-400 hover:text-white flex border-2 border-rose-400 my-auto w-64 h-12 items-center justify-center rounded-full">
                        <span className="font-semibold opacity-85 hover:text-white">
                          Inactive
                        </span>
                      </div>
                    </section>

                    <section
                      className="m-auto mb-8"
                      onClick={() => handleCall(astro.id)}
                    >
                      <div className="hover:cursor-pointer hover:border-rose-600 hover:shadow-md  hover:text-white flex border-2 border-rose-400 my-auto w-64 h-12 items-center justify-evenly rounded-full">
                        <div>
                          <div className="">
                            <MdCall className="text-3xl text-rose-700" />
                          </div>
                        </div>

                        <div>
                          <span className="text-md opacity-80 text-rose-600">
                            Start Call
                          </span>
                        </div>
                      </div>
                    </section>
                  </>
                )}
              </div>
            </section>

            <div className="my-6">
              <h1 className="mx-1 mb-6 font-bold text-xl">Specialization</h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {specialization?.map((spe, index) => (
                  <div
                    key={index}
                    className="text-center rounded-full py-2 bg-pink-200"
                  >
                    <div> {spe}</div>
                  </div>
                ))}
              </div>
            </div>

            <AstroAvailable />

            <div className="my-6">
              <h1 className="mb-6 font-bold text-xl">About Me</h1>
              <p className="text-justify">
                I have always been passionate about Astrology, Numerology, and
                Tarot. I've been learning & exploring these mystical arts since
                my teenage years. In 2004, a special connection blossomed with
                Tarot. It felt like a calling. Since then, I've been on a
                mission to learn all I can about it. Books, courses, you name
                it—I've dabbled in them all. It's like putting together pieces
                of a beautiful cosmic puzzle. One remarkable journey took me to
                the serene Ashram of Sri Sri Ravishankar Guruji. There, I met an
                insightful Australian mentor. Through her, I delved even deeper
                into the world of Tarot. With all that I have learnt in all
                these years, I am here to help you solve & understand all of
                life's phases through my expertise, intuitive abilities and
                insights.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default AstroDetails;
