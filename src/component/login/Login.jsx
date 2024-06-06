import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import loginSvg from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from 'antd';


const Login = () => {
  const [formData, setFormData] = useState({
    username: "", 
    password:"",
    errors: {}
  });
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();
  
  const validateForm =(e) =>{
    const errors = {};

    //Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required";
    }

    // Check if username is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    ////console.log("CALL submit")
    if (validateForm()) {
      ////console.log("WE ARE HERE")
      axios
      .post("http://127.0.0.1:8000/api/userlogin", {
        email:formData.username,
        password:formData.password, 
      })
      .then((response) => {
        console.log(response.data.status,"DATA RESPONSE")
        if(response.data.status =="success"){
          const authToken = response.data.access_token; // assuming the server sends back the token in the response
          localStorage.setItem('token', authToken); // Store token in localStorage`
          localStorage.setItem('userId', response.data.userID);
          setToken(authToken);
          message.success('Login was successful!');
          navigate("/account")
        }
    
      }) .catch((error) => {
        
        if(error.response.data.status =="failed"){
          message.success(error.response.data.message);
        }
 
        ////console.log(error.response.data.data.mobilenumber[0]);
        if(error.response.data.message =="Validation Error!"){
          if(error.response.data.data.mobilenumber[0]!=''){
            setMobileerror(error.response.data.data.mobilenumber[0]);
          }
        }
       
      })
    }else{
      ////console.log("SOME PROBLEM OCCUR")
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
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
              <label htmlFor="email" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="email"
                  name="username"
                  type="text"
                  placeholder="User Name"
                  value={formData.username}
                  onChange={handleChange}
                />
              {formData.errors.username && (
              <p style={{ color: "red" }}>{formData.errors.username}</p>
              )}
              </label>

              <label htmlFor="password" className="block mb-4">
                <input
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              {formData.errors.password && (
          <p style={{ color: "red" }}>{formData.errors.password}</p>
             )}

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
