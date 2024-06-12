/* eslint-disable react/no-unescaped-entities */
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import GirlForm from "./GirlForm";
import BoyForm from "./BoyForm";
import { useState } from "react";
import KundaliDescription from "./KundaliDescription";

const MatchKundali = () => {
  const navigate = useNavigate();

  const [girlFormData, setGirlFormData] = useState({
    girlname: "",
    girldateOfBirth: {
      day: "",
      month: "",
      year: "",
    },
    girlplaceOfBirth: "",
  });

  const [boyFormData, setBoyFormData] = useState({
    boyname: "",
    boydateOfBirth: {
      day: "",
      month: "",
      year: "",
    },
    boyplaceOfBirth: "",
  });

  const handleGenerateKundli = async () => {
    const combinedData = {
      ...girlFormData,
      ...boyFormData,
    };

    console.log(combinedData);
  };

  return (
    <div className="">
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-[#fbb62e]">
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
                title: <span className="text-white">Kundali</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20 ">
          <div className="container mx-auto py-8 w-full">
            <section className="font-bold mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
              <p className="text-xl opacity-80">
                KUNDALI MATCHING FOR MARRIEGE
              </p>
              <p className="w-36 h-[2px] bg-amber-600 m-2 "></p>
            </section>

            <section className="mb-6">
              <p className="text-lg font-bold opacity-80 leading-6 mb-2">
                Free Match Making - Kundli Milan & Gun Milan to Check
                Possibilities of Marriage
              </p>
              <p className="text-justify opacity-90">
                Kundli Matching or Horoscope Matching plays vital role at the
                time of marriage. Hindu Scriptures consider marriage as a holy
                union planned even before taking birth. Marriage is also one of
                the most beautiful moments in one's life. Everyone wants a good
                spouse with whom s/he can create some beautiful memories and
                feel happy. This is the area where actual happiness of the
                person lies over. Where marriage is an important aspect in
                India, people today are very much interested in finding the
                perfect life partner. In Hinduism, horoscope or kundli of both
                boy and girl are matched in order to nullify any bad effects
                after marriage. Also, in case of any doshas, astrology offers
                several remedies and solutions to overcome its malefic effects.
              </p>
            </section>

            <div className="max-w-md md:max-w-4xl flex flex-col md:flex-row mx-auto">
              <GirlForm formData={girlFormData} setFormData={setGirlFormData} />
              <BoyForm formData={boyFormData} setFormData={setBoyFormData} />
            </div>
            <div className="max-w-md pb-5 bg-white md:max-w-4xl flex  justify-center md:justify-end gap-3 mx-auto">
              <button
                type="button"
                className="bg-amber-500 w-40 text-white py-2 px-4 rounded-full hover:bg-amber-600 focus:outline-none"
                onClick={handleGenerateKundli}
              >
                Reset
              </button>
              <button
                style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px" }}
                type="button"
                className="bg-amber-500 w-40 text-white py-2 px-4 rounded-full hover:bg-amber-600 focus:outline-none"
                onClick={handleGenerateKundli}
              >
                Generate Kundli
              </button>
            </div>
          </div>
          <KundaliDescription />
        </div>
      </Layout>
    </div>
  );
};

export default MatchKundali;
