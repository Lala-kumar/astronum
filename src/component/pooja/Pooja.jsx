import React from "react";
import Layout from "../layout/Layout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router";
import lakshmi from "../../assets/lakshmi.jpeg";
import ganesha from "../../assets/ganesha.jpeg";
import shiva from "../../assets/shiva.jpeg";
import vishnu from "../../assets/vishnu.jpeg";
import sarashwati from "../../assets/saraswati.jpeg";
import shani from "../../assets/shani.jpeg";

const Pooja = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Layout>
        {/* BreadCrumbs */}

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
              title: <span className="text-white">Book A Pooja</span>
            },
          ]}
        />
      </h1>

        <h1 className="font-bold bg-pink-100 mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
          <p className="text-xl"> MOST BOOKED PUJAS</p>
          <p className="w-36 h-[2px] bg-pink-600 m-2 "></p>
        </h1>

        {/*book a pooja 1 */}

        <section className="flex flex-wrap justify-center items-center">
          <div className="p-2 m-4 rounded-3xl lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="border-pink-400 border h-full bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={lakshmi}
                  alt="blog"
                />
              </div>

              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Maa Lakshmi Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for wealth, prosperity and fortune
                </p>

                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹5,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 m-4 rounded-3xl   lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="h-full border-pink-400 border bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={shiva}
                  alt="blog"
                />
              </div>

              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Shiv Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for good health, harmonious relationships, and material
                  prosperity.
                </p>

                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹7,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 m-4 rounded-3xl   lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="h-full border-pink-400 border bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={shani}
                  alt="blog"
                />
              </div>
              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Shree Shani Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for Planetary & health issues, delays in marriage
                </p>
                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹9,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 m-4 rounded-3xl   lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="h-full border-pink-400 border bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={vishnu}
                  alt="blog"
                />
              </div>
              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Shree Satyanarayn Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for harmony and unity within the family.
                </p>
                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹2,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 m-4 rounded-3xl   lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="h-full border-pink-400 border bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={sarashwati}
                  alt="blog"
                />
              </div>
              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Sarashvati Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for Success in competetive exams & education
                </p>
                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹11,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 m-4 rounded-3xl lg:w-1/4 md:w-1/3  justify-center items-center">
            <div className="h-full border-pink-400 border bg-contain duration-300 ease-in-out rounded-3xl overflow-hidden">
              <div className="flex bg-fit m-2 justify-center cursor-pointer">
                <img
                  className=" rounded-3xl object-cover w-[260px] bg-red-500 h-80  hover:scale-105  duration-300 ease-in-out"
                  src={ganesha}
                  alt="blog"
                />
              </div>

              <div className="p-5">
                <h1 className="title-font  font-medium text-gray-900">
                  Shree Ganesh Pooja
                </h1>
                <p className="text-rose-500 w-60 text-sm mb-3">
                  Pooja for success, prosperity, and the removal of obstacles.
                </p>

                <p className="leading-relaxed mb-3 text-xs text-pink-700">
                  Starting from ₹2,100.00
                </p>
                <div className=" flex justify-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full  py-2"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Pooja;
