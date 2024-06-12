// import { useState } from "react";
// import Layout from "../layout/Layout";
// import { Steps } from "antd";
// import { Link } from "react-router-dom";
// import { FaCircleArrowRight } from "react-icons/fa6";

// const AstroLogin = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const onStepsChange = (newCurrentStep) => {
//     console.log("onChange:", newCurrentStep);
//     setCurrentStep(newCurrentStep);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setCurrentStep(currentStep + 1);
//   };

//   // Conditionally render the form based on the current step
//   const renderForm = () => {
//     if (currentStep === 0) {
//       return (
//         <div className="w-full sm:max-w-sm mx-auto my-8 bg-white rounded-xl">
//           <form
//             className="max-w-md mx-auto m-4 p-5"
//             onSubmit={handleFormSubmit}
//           >
//             <label htmlFor="name" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="name"
//                 name="name"
//                 type="name"
//                 placeholder="Enter your full name"
//               />
//             </label>
//             <label htmlFor="number" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="number"
//                 name="number"
//                 type="text"
//                 placeholder="Enter your mobile number"
//               />
//             </label>
//             <label htmlFor="address" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="address"
//                 name="address"
//                 type="address"
//                 placeholder="Enter your address"
//               />
//             </label>
//             <label htmlFor="email" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email "
//               />
//             </label>

//             <label htmlFor="password" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="Create a strong password"
//               />
//             </label>

//             <label htmlFor="password1" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="password1"
//                 name="password1"
//                 type="password"
//                 placeholder="Confirm Passowrd"
//               />
//             </label>

//             <div className="text-center lg:text-left">
//               <button
//                 type="submit"
//                 className="w-full  bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 uppercase mb-4 lg:mb-0"
//               >
//                 <span className="flex justify-center items-center">
//                   {" "}
//                   <span className="mr-1"> Go</span> <FaCircleArrowRight />
//                 </span>
//               </button>

//               <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
//                 <span>Do you already have an account?</span>
//                 <Link
//                   to={"/login"}
//                   className="text-blue-500 hover:text-blue-600 transition duration-200 ease-in-out"
//                 >
//                   <span>Log-In</span>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       );
//     } else if (currentStep === 1) {
//       return (
//         <div className="w-full sm:max-w-sm mx-auto my-8 bg-white rounded-xl">
//           <form
//             className="max-w-md mx-auto m-4 p-5"
//             onSubmit={handleFormSubmit}
//           >
//             <label htmlFor="specialization" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="specialization"
//                 name="specialization"
//                 type="text"
//                 placeholder="Enter your specialization"
//               />
//             </label>
//             <label htmlFor="language" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="language"
//                 name="language"
//                 type="text"
//                 placeholder="Enter your language"
//               />
//             </label>
//             <label htmlFor="experience" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="experience"
//                 name="experience"
//                 type="text"
//                 placeholder="Enter your experience"
//               />
//             </label>
//             <label htmlFor="price" className="block mb-4">
//               <input
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 required
//                 id="price"
//                 name="price"
//                 type="text"
//                 placeholder="Enter your expected call price "
//               />
//             </label>

//             <div className="text-center lg:text-left">
//               <button
//                 type="submit"
//                 className="w-full  bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 uppercase mb-4 lg:mb-0"
//               >
//                 <span className="flex justify-center items-center">
//                   {" "}
//                   <span className="mr-1"> Go</span> <FaCircleArrowRight />
//                 </span>
//               </button>
//             </div>
//           </form>
//         </div>
//       );
//     }
//   };

//   return (
//     <main className="bg-slate-100">
//       <Layout>
//         <div className="h-full mx-4">
//           <h1 className="font-bold text-xl text-center my-6">
//             Astrologer Register
//           </h1>

//           <Steps
//             current={currentStep}
//             onChange={onStepsChange}
//             items={[
//               {
//                 title: "Step 1",
//                 description: "Personal Details",
//               },
//               {
//                 title: "Step 2",
//                 description: "Skill Details",
//               },
//               {
//                 title: "Step 3",
//                 description: "Other Details",
//               },
//               {
//                 title: "Step 4",
//                 description: "Identity Details",
//               },
//             ]}
//           />

//           {renderForm()}
//         </div>
//       </Layout>
//     </main>
//   );
// };

// export default AstroLogin;

import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, message } from "antd";
import { useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

import regestration from "../../assets/regestration.svg";

const AstroRegister = () => {
  const navigate = useNavigate();

  const initialData = {
    fullname: "",
    mobilenumber: "",
    emailaddress: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/astro/astroReg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        message.success("Login Successfull!");
      } else {
        message.error("Login Failed!");
      }

      localStorage.setItem("token", JSON.stringify(data));
      setFormData(initialData);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Layout>
      <div className="h-full">
        <h1 className="font-bold mb-6 mx-auto text-center p-2 text-white bg-[#fbb62e]">
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

        <main className="mb-5 min-h-screen px-5">
          <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center">
            <div className="">
              <img src={regestration} alt="login" className="w-[300px]" />
            </div>

            <div className="p-2">
              <h1 className="font-semibold text-3xl text-center mb-[2rem]">
                Create Account
              </h1>

              <div className="grid grid-cols-2 place-content-center gap-4">
                <div>
                  <input
                    name="fullname"
                    onChange={handleChange}
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none "
                    type="text"
                    placeholder="Your Full name"
                    value={formData.fullname}
                  />
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
                </div>
                <button
                  onClick={handleSubmit}
                  className="font-semibold py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none w-28"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};
export default AstroRegister;
