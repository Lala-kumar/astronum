import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, message } from "antd";
import { useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { LoadingOutlined } from "@ant-design/icons";

import regestration from "../../assets/regestration.svg";

const AstroRegister = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initialData = {
    fullname: "",
    mobilenumber: "",
    emailaddress: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({
    fullname: "",
    mobilenumber: "",
    emailaddress: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    // Clear error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  const HandleClear = () => {
    setErrors({
      fullname: "",
      mobilenumber: "",
      emailaddress: "",
      password: "",
    });

    setFormData(initialData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/astro/astroReg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        message.success("Register Successfully!");
      } else {
        setErrors(data.data);
      }

      setFormData(initialData);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
      message.error("Something went wrong! Please try again.");
    }
  };

  return (
    <Layout>
      <div className="h-full">
        <h1 className="font-bold mb-6  px-4 sm:px-6 md:px-12 lg:px-20 mx-auto text-center p-2 text-white bg-[#fbb62e]">
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
                title: <span className="text-white">Astro Regestration</span>,
              },
            ]}
          />
        </h1>

        <main className="mb-5 w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex w-full mx-auto flex-col md:flex-row gap-5 justify-evenly items-center">
            <div className="w-full mx-auto">
              <img
                src={regestration}
                alt="login"
                className="w-[300px] mx-auto"
              />
            </div>

            <div className="w-full mx-auto">
              <h1 className="font-semibold text-3xl text-center mb-[2rem]">
                Create Account
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center gap-2 px-2">
                <div>
                  <input
                    name="fullname"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    placeholder="Your Full name"
                    value={formData.fullname}
                  />
                  <p className="text-red-600  h-5 text-sm">{errors.fullname}</p>
                </div>
                <div>
                  <input
                    name="mobilenumber"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    placeholder="Your Mobile Number"
                    value={formData.mobilenumber}
                  />
                  <p className="text-red-600  h-5 text-sm">
                    {errors.mobilenumber}
                  </p>
                </div>
                <div>
                  <input
                    name="emailaddress"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    placeholder="Your Email Address"
                    value={formData.emailaddress}
                  />
                  <p className="text-red-600  h-5 text-sm">
                    {errors.emailaddress}
                  </p>
                </div>

                <div>
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    placeholder="Your Password"
                    value={formData.password}
                  />
                  <p className="text-red-600  h-5 text-sm">{errors.password}</p>
                </div>
              </div>
              <div className="w-full px-2 flex gap-5 justify-end">
                <button
                  type="button"
                  onClick={HandleClear}
                  className="font-semibold py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 ease-in-out flex items-center justify-center  w-28"
                >
                  Clear
                </button>

                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="font-semibold py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 ease-in-out flex items-center justify-center  w-28"
                  >
                    <LoadingOutlined className="py-1" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="font-semibold py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 ease-in-out flex items-center justify-center  w-28"
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};
export default AstroRegister;
