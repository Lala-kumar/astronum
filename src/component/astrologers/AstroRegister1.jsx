import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Steps } from "antd";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

const AstroLogin = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const onStepsChange = (newCurrentStep) => {
    console.log("onChange:", newCurrentStep);
    setCurrentStep(newCurrentStep);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();TTT
    setCurrentStep(currentStep + 1);
  };

  // Conditionally render the form based on the current step
  const renderForm = () => {
    if (currentStep === 0) {
      return (
        <div className="w-full sm:max-w-sm mx-auto my-8 bg-white rounded-xl">
          <form
            className="max-w-md mx-auto m-4 p-5"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="name" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="name"
                name="name"
                type="name"
                placeholder="Enter your full name"
                
              />
            </label>
            <label htmlFor="number" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="number"
                name="number"
                type="text"
                placeholder="Enter your mobile number"
                
              />
            </label>
            <label htmlFor="address" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="address"
                name="address"
                type="address"
                placeholder="Enter your address"
                 
              />
            </label>
            <label htmlFor="email" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email "
                
              />
            </label>

            <label htmlFor="password" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
               
              />
            </label>

            <label htmlFor="password1" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="password1"
                name="password1"
                type="password"
                placeholder="Confirm Passowrd"
                
              />
            </label>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="w-full  bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 uppercase mb-4 lg:mb-0"
              >
                <span className="flex justify-center items-center">
                  {" "}
                  <span className="mr-1"> Go</span> <FaCircleArrowRight />
                </span>
              </button>

              <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
                <span>Do you already have an account?</span>
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out"
                >
                  <span>Log-In</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      );
    } else if (currentStep === 1) {
      return (
        <div className="w-full sm:max-w-sm mx-auto my-8 bg-white rounded-xl">
          <form
            className="max-w-md mx-auto m-4 p-5"
            onSubmit={handleFormSubmit}
          >
            <label htmlFor="specialization" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="specialization"
                name="specialization"
                type="text"
                placeholder="Enter your specialization"
                
              />
            </label>
            <label htmlFor="language" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="language"
                name="language"
                type="text"
                placeholder="Enter your language"
                
              />
            </label>
            <label htmlFor="experience" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="experience"
                name="experience"
                type="text"
                placeholder="Enter your experience"
                
              />
            </label>
            <label htmlFor="price" className="block mb-4">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                required
                id="price"
                name="price"
                type="text"
                placeholder="Enter your expected call price "
                
              />
            </label>

            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="w-full  bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 uppercase mb-4 lg:mb-0"
              >
                <span className="flex justify-center items-center">
                  {" "}
                  <span className="mr-1"> Go</span> <FaCircleArrowRight />
                </span>
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <main className="bg-slate-100">
      <Layout>
        <div className="h-full mx-4">
          <h1 className="font-bold text-xl text-center my-6">
            Astrologer Register
          </h1>

          <Steps
            current={currentStep}
            onChange={onStepsChange}
            items={[
              {
                title: "Step 1",
                description: "Personal Details",
              },
              {
                title: "Step 2",
                description: "Skill Details",
              },
              {
                title: "Step 3",
                description: "Other Details",
              },
              {
                title: "Step 4",
                description: "Identity Details",
              },
            ]}
          />

          {renderForm()}
        </div>
      </Layout>
    </main>
  );
};

export default AstroLogin;
