import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import kundali from "../../assets/kundali.jpg";
import AriesFilled from "../../assets/AriesFilled.svg"
import Astrologers from "../astrologers/Astrologers";


const Todayshoroscope = () => {
  const navigate = useNavigate();
  const [prediction, setPrediction] = useState({
    prediction_date: '12-09-2023',
    prediction: 'This is sample daily horoscope.Today is the day where you can impress anyone with your smart talks. Expression of thoughts comes easily today and help in your presentations and meetings go smooth. Boost your confidence with lots of health drinks and exercise. Feeling fresh is important; starting your day and healthy lifestyle will play a major role. Maintain your high stamina for social events you might attend in the evening. Impressing your partner is easier now, take out some time to spend with them and delight them with respect and care.',
  });
  const [users, setUsers] = useState([]);
  const [zodicsign, setZodicsign] = useState('aries');

  const [text, setText] = useState([]);
  const [calltext,setCalltext] = useState([]);

  const fetchData = async () => {
    console.log("TEST ZODIC SIGN",zodicsign);
    try {
      const response = await fetch('https://json.astrologyapi.com/v1/horoscope_prediction/daily/'+zodicsign, {
        method: 'GET',
        headers: {
          'authorization': 'a7043da907e0da820efbdf7866bf4b06d7dc6793'
        }
      });
      const data = await response.json();
      ///// setPrediction(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const callZoidic = async (zodic) =>{
    setText()
 
  setZodicsign(zodic);
  fetchData();
  }



  
  const nextdayHorscopes = async () => {

    try {

      const response = await fetch('https://json.astrologyapi.com/v1/horoscope_prediction/daily/next/'+zodicsign, {
        method: 'GET',
        headers: {
          'authorization': 'a7043da907e0da820efbdf7866bf4b06d7dc6793'
        }
      });
      const data = await response.json();
      /// setPrediction(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }


  const yesterdayHorscopes = async () => {

    try {

      const response = await fetch('https://json.astrologyapi.com/v1/horoscope_prediction/daily/previous/'+zodicsign, {
        method: 'GET',
        headers: {
          'authorization': 'a7043da907e0da820efbdf7866bf4b06d7dc6793'
        }
      });
      const data = await response.json();
      ///  setPrediction(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }


  const weeklyHorscopes = async () => {

    try {

      const response = await fetch('https://json.astrologyapi.com/v1/horoscope_prediction/weekly/'+zodicsign, {
        method: 'GET',
        headers: {
          'authorization': 'a7043da907e0da820efbdf7866bf4b06d7dc6793'
        }
      });
      const data = await response.json();
      ///setPrediction(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }



  const monthlyHorscopes = async () => {

    try {

      const response = await fetch('https://json.astrologyapi.com/v1/horoscope_prediction/monthly/'+zodicsign, {
        method: 'GET',
        headers: {
          'authorization': 'a7043da907e0da820efbdf7866bf4b06d7dc6793'
        }
      });
      const data = await response.json();
      /// setPrediction(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }



  useEffect(() => {
   


    fetchData();
  }, []);
  return (
    <div className="bg-pink-50">
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-pink-700">
          <Breadcrumb
            className="text-gray-50"
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
                title: <span className="text-white">Today's Horoscope  <span> &gt; </span> Aries
                </span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <div className="container mx-auto py-8 ">
            <p className="text-center mb-6 font-semibold text-2xl">
              Aries Today's Horoscope
            </p>


            <section className="flex flex-col md:flex-row lg:flex-row mb-6  items-center">

              <div className="w-3/4 flex md:flex-row">

                <div className="mb-[3rem] flex flex-row  rounded  border border-[#FC4163]">
                  <div className="flex flex-row"><img
                    src={AriesFilled}
                    alt="Kundali"
                    className="rounded-full h-24 w-24 mr-2"
                  />  <p className="text-4xl" style={{ color: "rgb(211 47 76)" }}> Aries</p>

                  </div>
                  <p className="mt-12 text-sm">March 21 – April 19</p>
                  <div className="m-4  " style={{
                    borderLeft: "1px solid rgba(182, 33, 60,.55)",
                    height: 50
                  }} ></div>


                  <div className=""><p className="text-slate-500	mt-4   font-light font-['hansenG'] ">Lucky Colours</p>

                    Tangerine Dream, Frosted Lime.

                  </div>
                  <div className="m-4  " style={{
                    borderLeft: "1px solid rgba(182, 33, 60,.55)",
                    height: 50
                  }} ></div>
                  <div> <p>Lucky Numbers</p>

                    8, 5, 7.

                  </div>
                  <div className="m-4  " style={{
                    borderLeft: "1px solid rgba(182, 33, 60,.55)",
                    height: 50
                  }} ></div>
                  <div><p>Lucky Alphabets</p>

                    W, Z, A.

                  </div>



                </div>
              </div>
              <div className="w-1/4">
                <p className="text-slate-500 text-xs  ml-24 mt-1 mb-[1rem]">Choose the time period </p>
                <div className="grid grid-cols-2 grid-rows-2 gap-x-12	" style={{ rowGap: "0.75rem" }}>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="bg-[#FC4163]   border-solid border rounded    w-40  border-[#FC4163] py-10 ">Today</button></div>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-10  w-40  border-[#FC4163]  " onClick={nextdayHorscopes}>Tomorrow</button></div>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="border-solid border rounded px-10  w-40 border-[#FC4163]  " onClick={yesterdayHorscopes}>Yesterday</button></div>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap" onClick={weeklyHorscopes} >This Week</button></div>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap" onClick={monthlyHorscopes}>This Month</button></div>
                  <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-2   border-[#FC4163] w-40  text-wrap">This Year</button></div>
                </div>
              </div>








            </section>


            <section className="flex flex-col md:flex-row lg:flex-row mb-6 justify-center items-center">
                <div className="w-3/4 flex md:flex-row text-wrap ml-[-1rem] mt-[-17rem]">
                {prediction.prediction}
                </div>
                <div className="w-1/4">
                  <p className="text-slate-500 text-xs  ml-24 mt-1 mb-[1rem]">Choose your Zodiac sign </p>
                   <div className="grid grid-cols-2 grid-rows-6 gap-x-12	" style={{ rowGap: "0.75rem" }}>
                    <div>
                      <button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="bg-[#FC4163]   border-solid border rounded 
                         w-40  border-[#FC4163] py-10 "
                          onClick={() => callZoidic('aries')}>Aries</button>
                    </div>
                    <div>
                      <button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-10  w-40  border-[#FC4163]  " 
                      onClick={() => callZoidic('taurus')}
                      >Taurus</button>
                    </div>
                    <div>
                      <button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="border-solid border rounded px-10  w-40 border-[#FC4163] " onClick={() => callZoidic('gemini')} >Gemini</button>
                    </div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap" onClick={() => callZoidic('cancer')} >Cancer</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap"   onClick={() => callZoidic('leo')}>Leo</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-2   border-[#FC4163] w-40  text-wrap" onClick={() => callZoidic('virgo')} >Virgo</button></div>


                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-10  w-40  border-[#FC4163]  "  onClick={() => callZoidic('libra')}>Libra</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="border-solid border rounded px-10  w-40 border-[#FC4163]  "  onClick={() => callZoidic('scorpio')}>Scorpio</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap"   onClick={() => callZoidic('sagittarius')}>Sagittarius</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className="  border-solid border rounded px-2 w-40  border-[#FC4163] text-wrap"  onClick={() => callZoidic('capricorn')}>Capricorn</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-2   border-[#FC4163] w-40  text-wrap"   onClick={() => callZoidic('aquarius')}>Aquarius</button></div>
                    <div><button style={{ paddingTop: '1px', paddingBottom: '9px' }} className=" border-solid border rounded px-2   border-[#FC4163] w-40  text-wrap" onClick={() => callZoidic('pisces')}>Pisces</button></div>

                  </div>
                </div>


            </section>


            <section className="flex flex-col mb-6 justify-center items-center bg-[#f5f5f5]">
              <div className="mb-6">Recommended Astrolgers</div>

              <Astrologers specializationfilter={0} />
            </section>






          </div>
        </div>


      </Layout>

    </div>
  );

};
export default Todayshoroscope;