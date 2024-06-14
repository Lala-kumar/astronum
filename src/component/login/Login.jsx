/* eslint-disable react/no-unescaped-entities */
import Layout from "../layout/Layout";
import loginSvg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Login = () => {
  const initialData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/userlogin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        message.success("Login Successfull!");
        navigate("/");
      } else {
        message.error("Login Failed!");
      }

      localStorage.setItem("user", JSON.stringify(data));
      setFormData(initialData);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      message.error("Something went wrong try login again.");
    }
  };

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
            <form className="max-w-md mx-auto" onSubmit={HandleSubmit}>
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={HandleChange}
                  required
                />
              </label>

              <label htmlFor="password" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={HandleChange}
                  required
                />
              </label>

              <a
                href="#"
                className="block text-sm text-neutral-600 hover:text-amber-400 mb-6 "
              >
                Forgot password?
              </a>

              <div className="flex flex-col items-center  lg:justify-between">
                {loading ? (
                  <button
                    disabled
                    className="w-full cursor-not-allowed bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                  >
                    <LoadingOutlined />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full  bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                  >
                    Login
                  </button>
                )}

                <p className="text-sm font-semibold mt-2 mb-0 text-neutral-600">
                  Don't have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-amber-500 hover:text-amber-600 transition duration-200 ease-in-out"
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
