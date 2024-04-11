import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

const Notification = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="min-h-screen ">
        <h1 className="font-bold mb-6 mx-auto text-center p-2 text-white bg-pink-700">
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
                title: <span className="text-white">Notifications</span>,
              },
            ]}
          />
        </h1>

        <h1 className="font-bold mb-6 text-center p-2 mx-auto w-72 rounded-md bg-pink-100">
          Notifications
        </h1>

        <div className="container mx-auto max-w-2xl">
          <ul className="w-full container mx-auto">
            <li
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
              className="mx-2 mb-4 border rounded-xl h-auto cursor-pointer"
            >
              <div className="w-full">
                <h1 className="font-bold pl-2 pt-3">
                  Your Weekly Horoscope is here 💖
                </h1>
                <p className="text-sm p-2 text-justify ">
                  Tap to find what this week has for you in terms of love,
                  career, health, finance, and much more. 😍🙏🤞
                </p>
                <p className="flex text-xs items-end justify-end  text-gray-700 mr-3 pb-1">
                  22/12/2024
                </p>
              </div>
            </li>

            <li
              style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
              className="mx-2 border rounded-xl h-auto cursor-pointer"
            >
              <div className="w-full">
                <h1 className="font-bold pl-2 pt-3">
                  Health is Wealth, right? 🙏
                </h1>
                <p className="text-sm p-2 text-justify ">
                  Astrologer can tell what kind of health issues you could have
                  in future. Why not just ask today & prevent the worst with
                  precautions & remedies? 🥰Stay Healthy ❤️🤞
                </p>
                <p className="flex text-xs items-end justify-end  text-gray-700 mr-3 pb-1">
                  22/12/2024
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Notification;
