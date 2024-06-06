import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';
import dayjs from 'dayjs'
import axios from "axios";
import { message } from 'antd';



const astroReg = () => {


    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        //// margin: '4em',
        padding: '1em',
    };

    const [formData, setFormData] = useState({
        fullname: '',
        mobilenumber: '',
        emailaddress: '',
        password: '',
         
    })
    const [validationerror, setValidationerror] = useState({
        fullname: '',
        mobilenumber: '',
        emailaddress: '',
        password: '',
        
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }


   

    const handleSubmit = () => {
        setValidationerror(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
        axios
            .post("http://127.0.0.1:8000/api/astro/astroReg", {
                emailaddress: formData.emailaddress,
                password: formData.password,
                fullname: formData.fullname,
                mobilenumber: formData.mobilenumber
            })
            .then((response) => {

                if (response.data.status == "success") {

                    message.success('registration done successfully!');
                    setValidationerror(prevErrors => ({
                        ...prevErrors,
                        fullname: ''
                    }));
                    setValidationerror(prevErrors => ({
                        ...prevErrors,
                        emailaddress: ''
                    }));
                    setValidationerror(prevErrors => ({
                        ...prevErrors,
                        mobilenumber: ''
                    }));

                }

            }).catch((error) => { 
                setValidationerror(prevErrors => ({
                    ...prevErrors,
                    fullname: ''
                }));
                setValidationerror(prevErrors => ({
                    ...prevErrors,
                    emailaddress: ''
                }));
                setValidationerror(prevErrors => ({
                    ...prevErrors,
                    mobilenumber: ''
                }));

                 for (const key in error.response.data.errors) {
                  ///  console.log(key,"callkey");

                    setValidationerror(prevErrors => ({
                        ...prevErrors,
                        [key]: error.response.data.errors[key]
                    }));
                 }
                  
             
             
                      
               



            })

    }



    return (<Layout>
        <div className="h-full">
            <h1 className="font-bold mb-6 mx-auto text-center p-2 text-white bg-pink-700">
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
            <main className="mb-6 px-5">

                <div className="flex flex-row place-content-center md:ml-48 md:mr-48" style={divStyles}>

                    <div className="basis-2/4 hidden sm:block md:block lg:block">
                        <img src="/regestration.svg" alt="login" className="h-[500px] w-[327px]" />


                    </div>
                    <div className="md:basis-2/4 md:mr-[2rem] mt-[1rem]" >
                        <h1 className="font-semibold text-3xl text-center mb-[2rem]">Create Account</h1>

                        <div className="grid grid-cols-2 place-content-center gap-4">
                            <div>
                                <input name="fullname" onChange={handleChange} className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="text" placeholder="Your Full name" />
                                {validationerror.fullname &&
                                    <span style={{color:'red'}}>{validationerror.fullname}</span>}

                            </div>
                            <div>
                                <input name="mobilenumber" onChange={handleChange} className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="text" placeholder="Your Mobile Number" />
                                {validationerror.mobilenumber &&
                                    <span style={{color:'red'}}>{validationerror.mobilenumber}</span>}

                            </div>
                            <div>
                                <input name="emailaddress" onChange={handleChange} className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " type="text" placeholder="Your Email Address" />
                                {validationerror.emailaddress &&
                                    <span style={{color:'red'}}>{validationerror.emailaddress}</span>}

                            </div>


                            <div>
                                <input name="password" onChange={handleChange} type="password" className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-500 text-sm focus:border focus:outline-none " placeholder="Your Password" />
                                {validationerror.password &&
                                    <span style={{color:'red'}}>{validationerror.password}</span>}

                            </div>
                            <button onClick={handleSubmit} className="md:mt-5  ml-[5rem] md:ml-[10rem] tracking-wide font-semibold bg-blue-800 text-white     rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none w-28 m-8 p-3"> Sign Up </button>



                        </div>


                    </div>


                </div>


            </main>


        </div>

    </Layout>)
};
export default astroReg;