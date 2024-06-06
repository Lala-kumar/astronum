import React from "react";
import Layout from "../layout/Layout";
import loginSvg from "../../assets/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <main className="h-full pt-20 pb-20 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row basis-full`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img alt="login-img" src={loginSvg} />
            </div>
          </div>
          
          <div className="w-full sm:max-w-sm mx-5">
            <form className="max-w-md mx-auto">
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
              </label>

              <label htmlFor="password" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </label>

              <a
                href="#"
                className="block text-sm text-neutral-600 hover:text-pink-400 mb-6 "
              >
                Forgot password?
              </a>

              <div className="flex flex-col items-center  lg:justify-between">
                <button
                  type="submit"
                  className="w-full  bg-pink-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                >
                  Login
                </button>

                <p className="text-sm font-semibold mt-2 mb-0 text-neutral-600">
                  Don't have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-pink-500 hover:text-pink-600 transition duration-200 ease-in-out"
                  >
                    <span>Register</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Login;
