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


const callingReq = () => {

    const [listreq, setListreq] = useState([]);


    const fetchData = async () => {
        try {
            const token = localStorage.getItem("token");
            const astroId = localStorage.getItem("astroId");

            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.post(`http://127.0.0.1:8000/api/astro/viewrequest/${astroId}`,
                {
                    call_request: 0,
                }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json'
                }
            });

            console.log(response.data, "DDD");

            if (!response.status) {
                throw new Error('Failed to fetch data');
            }

            //const jsonData = await response.data.data;
            setListreq(response.data.data);

 
        } catch (error) {
            console.log(error);
            ////  setError(error.message);
        } finally {
            ////setIsLoading(false);
        }
    };
    const handleClick =() =>{

    }
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        //// margin: '4em',
        padding: '1em',
    };
    

    useEffect(() => { fetchData(); }, [])

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
                            title: <span className="text-white"> Request</span>,
                        },
                    ]}
                />
            </h1>
            <main className="mb-6 px-5">

                <div className="grid  md:grid-cols-3  grid-cols-1 gap-4 md:w-[40rem]  w-[20rem] justify-center ">
                    {listreq.map((req,index) => 
                    (

                        <div key={index} className="h-36 w-full mx-auto rounded-md flex m-4"   style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
                         
                         <div className="m-1 w-full "><p className="mb-1 cursor-pointer hover:text-gray-500">{req.first_name}</p> 
                         <p className=" mb-1 text-gray-600 text-ellipsis overflow-hidden">Req Time:{req.created_at}</p>
                         {/* <p className="text-gray-600 mb-1">Exp: 12 Year</p> */}
                        </div>     
                        <div className="right-div flex flex-col">
            
            <button
            id={`user-${req.userid}`}
           onClick={handleClick}
              className="mt-24 mr-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border-2 rounded-lg px-3  "
            >
              Call
            </button>
            <h4 className="mb-8"></h4>
          </div>     
                        </div>
                    ))}





                </div>
            </main>
        </div>
    </Layout>


    )
};
export default callingReq;
