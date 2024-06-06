import React, { useEffect, useState } from "react";
import SignupSvg from "../../assets/signup.svg";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { message } from 'antd';


export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    mobilenumber:"",
    email:"",
    confirmPassword: "",
    password:"",
    address:"",
    errors: {}
  });
  
  const [mobileerror, setMobileerror] = useState();
  const[successmsg, setSuccessmsg] = useState();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const validateForm =()=>{
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Fullname is required";
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (!formData.mobilenumber) {
      errors.mobilenumber = "Mobile Number is required";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }
    if(!formData.confirmPassword){
      errors.confirmPassword = " Confirm password is required";
    }
    if(formData.password  != formData.confirmPassword){
      errors.confirmPassword = "Password and  confirm password not match";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit data
       
      
      axios
      .post("http://127.0.0.1:8000/api/userregister", {
        username:formData.username,
        email:formData.email,
        password:formData.password,
        confirm_password:formData.password1,
        mobilenumber:formData.mobilenumber,
        address:formData.address
      })
      .then((response) => {
        console.log(response.data.status,"DATA RESPONSE")
        if (response.data.status === 'success') {
        ///  setSuccessmsg(success)
        message.success('Action was successful!');
        

        

        }

     
      }) .catch((error) => {
        ////console.log(error.response.data.data.mobilenumber[0]);
        if(error.response.data.data.mobilenumber[0]!=''){
          setMobileerror(error.response.data.data.mobilenumber[0]);
        }
      })
      

    } else {
      // Form is invalid, do nothing
    }
  };
 
  return (
    
    
    <Layout>
          {successmsg && (<Alert 
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />)}
      <main className="h-full pt-16 pb-20 mx-auto px-10 flex flex-col md:px-28 bg-gray-100">
        <div
          className={`flex justify-evenly w-full items-center flex-col lg:flex-row-reverse basis-full`}
        >
          <div className="flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <img alt="signup-img" src={SignupSvg} />
            </div>
          </div>
          <div className="w-full sm:max-w-sm mx-5">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="name"
                  name="username"
                  type="name"
                  placeholder="Enter your Full name"
                  value={formData.username}
                 onChange={handleChange}
                />
                {formData.errors.username && (
          <p style={{ color: "red" }}>{formData.errors.username}</p>
        )}

                 
              </label>
              <label htmlFor="number" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  id="number"
                  name="mobilenumber"
                  type="text"
                  placeholder="Enter your mobile number"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                />
                  {formData.errors.mobilenumber && (
                  <p style={{ color: "red" }}>{formData.errors.mobilenumber}</p>
                  )}
            { mobileerror && (
                  <p style={{ color: "red" }}>{formData.errors.mobilenumber}</p>
                  )}
              </label>
              <label htmlFor="address" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  id="address"
                  name="address"
                  type="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                />
                {formData.errors.address && (
                <p style={{ color: "red" }}>{formData.errors.address}</p>
                )}
              </label>
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email "
                  value={formData.email}
                  onChange={handleChange}
                />
          {formData.errors.email && (
               <p style={{ color: "red" }}>{formData.errors.email}</p>)}
              </label>

              <label htmlFor="password" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {formData.errors.password && (
                <p style={{ color: "red" }}>{formData.errors.password}</p>
                )}
              </label>

              <label htmlFor="confirmPassword" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  id="password1"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Passowrd"
                />
                {formData.errors.confirmPassword && (
                <p style={{ color: "red" }}>{formData.errors.confirmPassword}</p>
                )}
              </label>

              <div className="text-center lg:text-left">
                <button
                  type="submit"
                  className="w-full 
                   bg-pink-400 text-white
                   py-2 px-6 rounded-md shadow-md
                    hover:bg-pink-500 uppercase mb-4 lg:mb-0" 
                >
                  Sign-up
                </button>

                <p className="text-sm font-semibold mt-2 pt-1 mb-0 space-x-1 text-neutral-600">
                  <span>Do you already have an account?</span>
                  <Link
                    to={"/login"}
                    className="text-pink-500 hover:text-pink-600 transition duration-200 ease-in-out"
                  >
                    <span>Log-In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}
