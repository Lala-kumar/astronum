import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
 
import { LoadingOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import Layout from "../layout/Layout";
import callprofile from "../../assets/callprofile.png";

const astro = JSON.parse(localStorage.getItem("astro"));

const Astrologers = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [requests, setRequests] = useState([]);

  const fetchCallRequest = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL +
          `api/astro/viewrequest/${astro.userID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${astro.access_token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error Calling!");
      }

      const data = await response.json();
 
      setRequests(data.data);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCallRequest();
  }, []);

  const AcceptCall = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + `api/astro/acceptrequest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${astro.access_token}`,
          },
          body: JSON.stringify({ requID: id }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Calling!");
      }

  
 
 
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-[#fbb62e] mb-5">
          <Breadcrumb
            className="text-gray-50 "
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
                title: (
                  <span className="text-white">Consulatation Request</span>
                ),
              },
            ]}
          />
        </h1>
        <main className="px-2 md:px-12 lg:px-20 pb-20 min-h-screen">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requests.map((request) => (
              <section
                className="h-36 w-full mx-auto rounded-md flex"
                style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
                key={request.id}
              >
                <div className="m-1 w-full">
                  <img
                    src={
                      request.profile_pic
                        ? import.meta.env.VITE_SERVER_URL + `${astro.image}`
                        : callprofile
                    }
                    alt="image"
                    className="rounded-full w-20 h-20 m-1 object-cover object-center"
                  />
                </div>

                <div className="m-1 w-full ">
                  <p className="mb-1 cursor-pointer hover:text-gray-500">
                    {request.first_name}
                  </p>

                  <p className="text-gray-600 mb-1 text-sm">{request.dob}</p>
                  <p className="text-gray-600 mb-1 text-sm">
                    {request.address}
                  </p>
                </div>

                <div className="right-div flex flex-col">
                  {loading ? (
                    <button
                      disabled
                      className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-6 py-1"
                    >
                      <LoadingOutlined />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => AcceptCall(request.id)}
                      className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border rounded-lg px-6 py-1"
                    >
                      {request.request_status === "0" ? "Accept" : "Accepted"}
                    </button>
                  )}
                </div>
              </section>
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Astrologers;
