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


const AstroAccount = () => {
    const divStyles = {
        boxShadow: '1px 2px 9px #F4AAB9',
        //// margin: '4em',
        padding: '1em',
    };
    const [data, setData] = useState([]);
    const [specializationresult, setSpecializationresult] = useState([]);
    const [languageresult, setLanguageresult] = useState([]);
    const [checkedItems, setCheckedItems] = useState({});
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState('');



    const [formData, setFormData] = useState({
        astroname: '',
        specialization: [],
        languages: [],
        experience: '',
        expectedcallprice: '',
        profile_pic: '',
        accountno: '',
        ifsccode: '',
        bankname: '',

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));

    };
    const handleChecked = (e) => {
        const { value, checked } = e.target;

        setFormData((prevState) => {
            let updatedSpecialization;
            if (checked) {
                // Add the item to the specialization array
                updatedSpecialization = [...prevState.specialization, value];
            } else {
                // Remove the item from the specialization array
                updatedSpecialization = prevState.specialization.filter(item => item !== value);
            }

            return {
                ...prevState,
                specialization: updatedSpecialization
            };
        });
    };
    const handleCheckedlanguage = (e) => {
        const { value, checked } = e.target;

        setFormData((prevState) => {
            let updatedLanguages;
            if (checked) {
                // Add the item to the languages array
                updatedLanguages = [...prevState.languages, value];
            } else {
                // Remove the item from the languages array
                updatedLanguages = prevState.languages.filter(item => item !== value);
            }

            return {
                ...prevState,
                languages: updatedLanguages
            };
        });
    }
    const handleUpdate = (event) => {
        const astroId = localStorage.getItem('astroId');

        axios
            .post(`http://127.0.0.1:8000/api/astro/profileUpdate/${astroId}`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Accept': 'application/json' // Fix the syntax here
                },
                postdata: formData,



            })
            .then((response) => {

                if (response.data.status == "success") {

                    message.success('updated successfully!');

                }

            }).catch((error) => {





            })


    }


    var loadFile = (event) => {

        var input = event.target;
        var file = input.files[0];
        var type = file.type;

        var output = document.getElementById('preview_img');


        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
        const astroId = localStorage.getItem('astroId');
        const url = 'http://127.0.0.1:8000/api/astroUploadFile';
        const formData = new FormData();
        formData.append('profile_pic', file);
        formData.append('fileName', file.name);
        formData.append('astroId', astroId);
        formData.append("_method", "POST")
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }, 
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });



    };
    const fetchSpecializationData = () => {
        fetch(`http://127.0.0.1:8000/api/users/allSpecialization`)
            .then(response => {

                return response.json()
            })
            .then(data => {

                setSpecializationresult(data.data)
                ///// console.log(data,"Specalization");

            })
    }
    const fetchLanguagesData = () => {

        fetch(`http://127.0.0.1:8000/api/users/allLanguages`)
            .then(response => {

                return response.json()
            })
            .then(data => {
                console.log(data.data);
                setLanguageresult(data.data)


            })
    }



    useEffect(() => {

        const fetchData = async () => {
            try {
                // Retrieve token from local storage

                const token = localStorage.getItem("token");

                if (!token) {
                    navigate('/login');
                    return;
                }
                const userId = localStorage.getItem('astroId');
                const response = await fetch(`http://127.0.0.1:8000/api/astro/fetchprofileastro/${userId}`, {
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
                console.log(jsonData.data.image,"profile pic fetch");
                setData(jsonData.data);
                let resultSp = jsonData.data.specialization.split(",");

                formData.specialization = (jsonData.data.specialization).split(",");

                formData.languages = jsonData.data.languages_get;

                formData.astroname = jsonData.data.name;
                formData.expectedcallprice = jsonData.data.call_price;
                formData.experience = jsonData.data.experience;
                formData.bankname = jsonData.data.bankname;
                formData.ifsccode = jsonData.data.ifsccode;
                formData.accountno = jsonData.data.accountno;
                setImageUrl(jsonData.data.image);

               


            } catch (error) {
                console.log(error);
                ////  setError(error.message);
            } finally {
                ////setIsLoading(false);
            }
        };

        fetchData();
        fetchSpecializationData();
        fetchLanguagesData();

    }, [])
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
                        <div  className={`flex justify-evenly w-full  flex-col lg:flex-row basis-full`} >
                            <div style={divStyles} className="bg-white  me-8 bg-clip-border rounded-xl w-full">

                                <form>
                                    <div className="flex items-center space-x-6">
                                        <div className="shrink-0">
                                           { imageUrl &&  

                                            <img id='preview_img'   src={imageUrl}  className="h-16 w-16 object-cover rounded-full" alt="Current profile photo" />
                                           }
                                        </div>
                                        <label className="block">
                                            <span className="sr-only">Choose profile photo</span>
                                            <input type="file"   onChange={loadFile} className="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "/>
                                        </label>
                                    </div>
                                </form>




                                <div className="md:grid md:grid-cols-4 gap-9 mt-9">
                                    <div className="flex flex-row">
                                        Experience
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="text" placeholder="Experience" name="experience" id="experience"
                                            onChange={handleChange} value={formData.experience} className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                                        />
                                    </div>

                                    <div className="flex flex-row">

                                        Call Price
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="text" id="expectedcallprice" name="expectedcallprice"
                                            onChange={handleChange} value={formData.expectedcallprice}
                                            placeholder="Astroname" className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                                        />
                                    </div>




                                    <div className="flex flex-row">
                                        Bank Name:
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="text" id="bankname" name="bankname" onChange={handleChange}
                                            value={formData.bankname}
                                            placeholder="Bank Name" className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                                        />
                                    </div>


                                    <div className="flex flex-row">
                                        IFSC code:
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="text" id="ifsccode" name="ifsccode" onChange={handleChange}
                                            value={formData.ifsccode}
                                            placeholder="IFSC Code" className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                                        />
                                    </div>

                                    <div className="flex flex-row">
                                        Account No:
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="text" id="accountno" name="accountno" onChange={handleChange}
                                            value={formData.accountno}
                                            placeholder="Account No." className="w-full px-4 py-2 border mb-4 border-gray-300 rounded-md focus:outline-none focus:border-pink-400"
                                        />
                                    </div>
                                </div>



                                <div className="flex flex-row">
                                    Specialization
                                </div>
                                <div className="grid grid-cols-2 border rounded-md px-4 py-2">

                                    {specializationresult.map(speresult => {
                                        console.log(formData.specialization, "TEST HERE")
                                        let ids = speresult.id

                                        const isChecked = formData.specialization.includes(`${ids}`);
                                        const checkboxId = `sp${speresult.id}`;

                                        return (<div className="flex items-center mb-4" key={speresult.id}  >

                                            <input value={speresult.id} id={checkboxId} name="specialization[]"
                                                onChange={handleChecked} type="checkbox"
                                                checked={isChecked} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{speresult.name} {speresult.id} </label>
                                        </div>)


                                    })}

                                </div>

                                <div className="flex flex-row mt-9">
                                    Languages
                                </div>
                                <div className="grid grid-cols-2 border rounded-md px-4 py-2">
                                    {languageresult.map(laneresult => {
                                        let ids = laneresult.id
                                        const checkboxlId = `lan${laneresult.id}`;

                                        const isCheckedcheck = formData.languages.includes(`${ids}`);
                                        return (<div className="flex items-center mb-4" key={laneresult.id}  >

                                            <input value={laneresult.id} name="languages[]"
                                                id={checkboxlId} onChange={handleCheckedlanguage} type="checkbox" checked={isCheckedcheck}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{laneresult.name} {laneresult.id} </label>
                                        </div>)


                                    })}



                                </div>


                                <div>
                                    <button
                                        type="submit" onClick={handleUpdate}
                                        className="w-full  bg-pink-400 text-white py-2 px-6 rounded-md shadow-md hover:bg-pink-500 uppercase mb-4 lg:mb-0"
                                    >
                                        Update
                                    </button> </div>
                            </div>



                        </div>
                    </main>
                </div>
            </Layout>
        </>
       
    );
};

export default AstroAccount;
