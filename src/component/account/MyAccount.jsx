import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

const MyAccount = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20  text-center p-2 text-white bg-pink-700">
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
                title: <span className="text-white">My Account</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <h1 className="font-bold text-xl mt-4">Profile</h1>
          <h1 className="text-sm text-gray-500">
            Control your profile setup and itegrations
          </h1>

          <main className="h-full pt-2 pb-2 flex flex-col md:px-28 mt-6">
            <div
              className={`flex justify-evenly w-full  flex-col lg:flex-row basis-full`}
            >
              {/* section left */}
              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <form className="max-w-md mx-auto">
                  <label htmlFor="name" className="block">
                    Full Name :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Adam Glichrisht"
                  />

                  <label htmlFor="email" className="block">
                    Email :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Example@gmail.com"
                  />

                  <label htmlFor="dob" className="block">
                    Date of Birth :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="01/01/2000"
                  />

                  <div className="flex justify-between mb-10">
                    <button
                      type="submit"
                      className="w-full text-sm border-pink-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full text-sm border-pink-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              {/* section right */}

              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <h1 className="font-bold text-xl">Update Password</h1>
                <h1 className="text-sm text-gray-500 mb-6">
                  Enter your current password to make update
                </h1>

                <form className="max-w-md mx-auto">
                  <label htmlFor="password" className="block">
                    Current Password :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                  />

                  <label htmlFor="newPassword" className="block">
                    New Password :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    placeholder="Enter New Passowrd"
                  />

                  <div className="flex flex-col items-end  lg:justify-between">
                    <button
                      type="submit"
                      className="w-1/2 text-sm border border-pink-500 py-2 px-2 m-1 hover:text-white rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default MyAccount;
