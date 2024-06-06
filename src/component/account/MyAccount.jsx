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


const MyAccount = () => {
 

  const [formData, setFormData] = useState({
    username: "",
    gender:"",
    dob:"",
    timeofbirth: "",
    placeofbirth:"",
    address:"",
    errors: {}
  });
  const [selectedgender, setSelectedgender] = useState("");
  const [selectedtime, setSelectedtime] = useState("");
  const [selecteddate, setSelecteddate] = useState("");
  const [selecteddateerror, setSelecteddateerror] = useState("");  
  const [selectedgendererror, setSelectedgendererror] = useState("");
  const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

   

  const navigate = useNavigate();

  const validateForm =()=>{
    const errors = {};
     

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Fullname is required";
    }

    // Check if password is empty
    if (!selecteddate) {
      setSelecteddateerror("Dob is required")
    }
    if (selecteddate) {
      setSelecteddateerror("");
    }

    if (!selectedgender) {
      ////errors.selectedgender = "Gender is required";
      setSelectedgendererror("Gender is required")
    }
    if (selectedgender) {
      setSelectedgendererror("");
    }


    if (!formData.address) {
      errors.address = "Address is required";
    }
   

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;

  }

  const onChangeDatepicker = (date, dateString) => {
    console.log(date, dateString ,"Date Picker Call");
    setSelecteddate(dateString);
  };

  const onChangeTimepicker  = (time, timeString) => {
   // console.log(time, timeString);
   setSelectedtime(timeString);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
   /// console.log("FORMDATA",formData)
  };

  const handleChangeSelect = (e) => {
    setSelectedgender(e.target.value);
    console.log(e.target.value,"CONSOLE VALUE"); 
  };
  
  const handleSubmit = (event) => {
      event.preventDefault();
      if ((selecteddate!="") && (selectedgender!= "") && (validateForm())) {
  
     const userId = localStorage.getItem('userId');

      axios.post(`http://127.0.0.1:8000/api/users/updateProfile/${userId}`, {
        username: formData.username,
        gender: selectedgender,
        address: formData.address,
        place_of_birth:formData.placeofbirth,
        time_of_birth:selectedtime,
        dob:selecteddate,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        console.log(response.data.status, "DATA RESPONSE");
        if (response.data.status === 'success') {
          message.success('Action was successful!');
          // Perform actions after successful registration
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle registration error
      });
    }else{
        console.log(validateForm(),selecteddateerror)
    }
      
 
  };
  const [passwordformData, setPasswordformData] = useState({
     password:'',
     newpassword:'',
     passworderrors:{},
  });
  const passwordvalidateForm =()=>{
    const passworderrors = {};
     

    // Check if username is empty
    if (!passwordformData.password) {
      passworderrors.password = "Password required";
    }
    if(!passwordformData.newpassword){
      passworderrors.newpassword = "New password required";
    }

    
   

    setPasswordformData((prevState) => ({ ...prevState, passworderrors }));

    // Return true if there are no errors
    return Object.keys(passworderrors).length === 0;

  }
  const handlepasswordChange =(event) =>{
    const { name, value } = event.target;
    setPasswordformData((prevState) => ({ ...prevState, [name]: value }));
   };
  const handlePassword  =(event) =>{
    event.preventDefault();
   

           if(passwordvalidateForm()){
                  
      const userId = localStorage.getItem('userId');
   
      axios.post(`http://127.0.0.1:8000/api/users/changepassword/${userId}`, {
        current_password: passwordformData.password,
        new_password: passwordformData.newpassword,
      
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        console.log(response.data.status, "DATA RESPONSE");
        if (response.data.status === 'success') {
          message.success('Action was successful!');
          // Perform actions after successful registration
        }
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        // Handle registration error
      });
            }else{
           
            }
  };
  useEffect(() => {
    const fetchData = async () => {
        try {
            // Retrieve token from local storage

            const token = localStorage.getItem("token");

            if(!token){
                navigate('/login');
                return ;
            }
            const userId = localStorage.getItem('userId');
            const response = await fetch(`http://127.0.0.1:8000/api/users/profileget/${userId}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json' // Fix the syntax here
            },
            
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setData(jsonData);
            
            formData.username = jsonData.data.first_name;
            setSelectedgender(jsonData.data.gender);
            setSelecteddate(jsonData.data.dob);
            setSelectedtime(jsonData.data.time_of_birth);
            formData.placeofbirth = jsonData.data.place_of_birth;
            formData.address = jsonData.data.address;
        } catch (error) {
          consoloe.log(error);
          ////  setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
}, []); // Empty dependency array ensures this effect runs only once on component mount


  return (
    <>
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20  text-center p-2 text-white bg-pink-700">
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
                title: <span className="text-white">My Account</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <h1 className="font-bold text-xl mt-4">Profile</h1>
          <h1 className="text-sm text-gray-500">
            Control your profile setup and itegrations
          </h1>

          <main className="h-full pt-2 pb-2 flex flex-col md:px-28 mt-6">
            <div
              className={`flex justify-evenly w-full  flex-col lg:flex-row basis-full`}
            >
              {/* section left */}
              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                  <label htmlFor="name" className="block">
                    Full Name :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="name"
                    name="username"
                    type="text"
                    placeholder="Adam Glichrisht"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {formData.errors.username && (
                <p style={{ color: "red" }}>{formData.errors.username}</p>
                )}
                  
                  <label htmlFor="email" className="block">
                    Gender :
                  </label>
                   <select 
                     value={selectedgender} name="gender"     onChange={handleChangeSelect}  className="w-full px-8 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                  
                  >
                    <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option  value="Female">Female</option>

                  </select>
                  {selectedgendererror && (
                <p style={{ color: "red" }}>{selectedgendererror}</p>
                )}
                  
 

                  <label htmlFor="dob" className="block">
                    Date of Birth :
                  </label>
                  <Space direction="vertical" className="w-full">
                  <DatePicker name="dob" onChange={onChangeDatepicker}   className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"/>
                  </Space>
                  {selecteddateerror && (
                <p style={{ color: "red" }}>{selecteddateerror}</p>
                )}
                 


                 <label htmlFor="timeofbirth" className="block">
                    Time of Birth :
                  </label>
                  <Space direction="vertical"   className="w-full">
                  <TimePicker name="timeofbirth"  onChange={onChangeTimepicker} className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400" defaultValue={dayjs('12:08:23', 'HH:mm:ss')}  />
                  </Space>

                  <label htmlFor="name" className="block">
                    Place Of Birth :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="name"
                    name="placeofbirth"
                    type="text"
                    placeholder="Adam Glichrisht"
                    value={formData.placeofbirth}
                    onChange={handleChange}
                  />


                  <label htmlFor="name" className="block">
                      City,State,Country:
                    </label>
                    <input
                      className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                      id="name"
                      name="address"
                      type="text"
                      placeholder="Adam Glichrisht"
                      value={formData.address}
                      onChange={handleChange}
                    />
                      {formData.errors.address && (
                      <p style={{ color: "red" }}>{formData.errors.address}</p>
                      )}

                      <div className="flex justify-between mb-10">
                        <button
                          type="button"
                          onClick={() => navigate("/account")}
                          className="w-full text-sm border-pink-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                        >

                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-full text-sm border-pink-500 border hover:text-white py-2 px-2 m-1 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                        >
                          Save Changes
                        </button>
                      </div>

                </form>
              </div>

              {/* section right */}

              <div className="w-full sm:max-w-md mx-auto p-3 bg-stone-50 rounded-xl">
                <h1 className="font-bold text-xl">Update Password</h1>
                <h1 className="text-sm text-gray-500 mb-6">
                  Enter your current password to make update
                </h1>

                <form className="max-w-md mx-auto"  onSubmit={handlePassword}>
                  <label htmlFor="password" className="block">
                    Current Password :
                  </label>
                  <input  
                    className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                    id="password"
                    name="password"
                    type="password"
                    onChange={handlepasswordChange}
                    placeholder="Enter Password"
                  />
                  { passwordformData.passworderrors.password && (
                <p style={{ color: "red" }}>{passwordformData.passworderrors.password}</p>
                )}

                  <label htmlFor="newPassword" className="block">
                    New Password :
                  </label>
                  <input
                    className="w-full px-4 py-2 border mb-4 border-gray-300 
                    rounded-md focus:outline-none focus:border-pink-400"
                    id="newPassword"
                    name="newpassword"
                    type="password"
                    onChange={handlepasswordChange}
                    placeholder="Enter New Passowrd"
                  />
                    {passwordformData.passworderrors.newPassword && (
                <p style={{ color: "red" }}>{passwordformData.passworderrors.newPassword}</p>
                )}

                  <div className="flex flex-col items-end  lg:justify-between">
                    <button
                      type="submit"
                      className="w-1/2 text-sm border border-pink-500 py-2 px-2 m-1 hover:text-white rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                    >
                      Update
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </main>
        </div>
      </Layout>
    </>
  );
};

export default MyAccount;
