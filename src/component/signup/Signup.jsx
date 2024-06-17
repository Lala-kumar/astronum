import { useState } from "react";
import SignupSvg from "../../assets/signup.svg";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    mobilenumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    mobilenumber: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;

    setErrors({ ...errors, [name]: "" });

    const updatedFormValues = { ...formData };
    updatedFormValues[name] = value;

    setFormData(updatedFormValues);
  };

  const HandleClear = () => {
    setErrors({
      username: "",
      mobilenumber: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    });

    setFormData({
      username: "",
      mobilenumber: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  const validateForm = () => {
    const {
      username,
      mobilenumber,
      email,
      address,
      password,
      confirmPassword,
    } = formData;

    let isValid = true;
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    let newErrors = {
      username: "",
      mobilenumber: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    };

    if (username.trim().length === 0) {
      newErrors.username = "Name cannot be empty!";
      isValid = false;
    }

    if (mobilenumber.trim().length === 0) {
      newErrors.mobilenumber = "Number cannot be empty!";
      isValid = false;
    }

    if (!address.trim().length) {
      newErrors.address = "Address cannot be empty!";
      isValid = false;
    }

    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address!";
      isValid = false;
    }

    if (password.trim().length < 6) {
      newErrors.password = "Password must be greater than 6 characters!";
      isValid = false;
    }

    if (password.trim() !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch(
          import.meta.env.VITE_SERVER_URL + "api/userregister",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json();
   

        if (data.status === "success") {
          message.success("Account created Successfull!");
          HandleClear();
        } else {
          setErrors(data.data);
          message.error("Something went wrong!");
        }

        localStorage.setItem("token", JSON.stringify(data));

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
        message.error("Something went wrong try login again.");
      }
    }
  };

  return (
    <Layout>
      <main className="h-full w-full pt-16 pb-20 mx-auto flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row-reverse basis-full`}
        >
          <div className="flex w-full items-center justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <img alt="signup-img" src={SignupSvg} />
            </div>
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-2xl text-center pb-4">
              Create Free Account
            </h1>
            <form
              className="max-w-lg mx-auto border p-3 rounded-md"
              onSubmit={HandleSubmit}
            >
              <div className="pb-2">
                <label htmlFor="username" className="block">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.username}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600 h-5 text-sm">{errors.username}</p>
              </div>

              <div className="pb-2">
                <label htmlFor="mobilenumber" className="block ">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="mobilenumber"
                    name="mobilenumber"
                    type="text"
                    placeholder="Enter your mobile number"
                    value={formData.mobilenumber}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600  h-5 text-sm">
                  {errors.mobilenumber}
                </p>
              </div>

              <div className="pb-2">
                <label htmlFor="address" className="block ">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600  h-5 text-sm">{errors.address}</p>
              </div>

              <div className="pb-2">
                <label htmlFor="email" className="block ">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email "
                    value={formData.email}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600  h-5 text-sm">{errors.email}</p>
              </div>

              <div className="pb-2">
                <label htmlFor="password" className="block ">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600  h-5 text-sm">{errors.password}</p>
              </div>

              <div className="pb-2">
                <label htmlFor="confirmPassword" className="block ">
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-400"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Passowrd"
                    value={formData.confirmPassword}
                    onChange={HandleChange}
                  />
                </label>
                <p className="text-red-600  h-5 text-sm">
                  {errors.confirmPassword}
                </p>
              </div>

              <div className="text-center lg:text-left flex gap-3 ">
                <button
                  onClick={HandleClear}
                  type="button"
                  className="w-full  bg-amber-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-amber-500 uppercase mb-4 lg:mb-0"
                >
                  Clear
                </button>

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
                    Sign-up
                  </button>
                )}
              </div>
              <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
                <span>Do you already have an account?</span>
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out"
                >
                  <span>Log-In</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
