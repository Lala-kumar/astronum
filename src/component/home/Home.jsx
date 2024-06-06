import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Astrologers from "../astrologers/Astrologers";
import { useNavigate } from "react-router";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { forwardRef, useImperativeHandle } from 'react';


const Home = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [specializationresult,setSpecializationresult] = useState([]);
  const [id, setId] = useState('')
  const fetchSpecializationData = () => {
    fetch(`http://127.0.0.1:8000/api/users/allSpecialization`)
      .then(response => {
        
        return response.json()
      })
      .then(data => {
        setSpecializationresult(data.data)
        console.log(data.data,"Specalization");

      })
  }
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedSpecialization(e.target.value);
   
    console.log(e.target.value,"CONSOLE VALUE"); 
 
  };

  useEffect(() => {
    fetchSpecializationData()
   
    
  }, [])
  return (
    <div>
      <Layout>
        <div className="min-h-screen">
          {/* BreadCrumbs */}

          <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20  text-center p-2 text-white bg-pink-700 mb-5">
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
              ]}
            />
          </h1>

          {/* Dropdown */}
          <section className="flex justify-around gap-1">
            <h1 className="px-4 py-1 rounded-sm font-semibold text-white bg-pink-700">
              Talk To Astrologer
            </h1>
            <div className="relative inline-block ">
              <select
                value={selectedSpecialization}
                onChange={handleChange}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value=''>All</option>
                 { specializationresult.map(speresult => (
               <option  key={speresult.id} value= {speresult.id} >{speresult.name}</option>
               
                 )) }
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-4-4h8z" />
                </svg>
              </div>
            </div>
          </section>

          {/* Astrologer Card */}
          <Astrologers  specializationfilter= {selectedSpecialization}/>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
