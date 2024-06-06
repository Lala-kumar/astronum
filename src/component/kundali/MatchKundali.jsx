import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import GirlForm from "./GirlForm";
import BoyForm from "./BoyForm";

const MatchKundali = () => {
  const navigate = useNavigate();

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
                title: <span className="text-white">Kundali</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <div className="container mx-auto py-8 ">
            <section className="font-bold mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
              <p className="text-xl opacity-80">
                KUNDALI MATCHING FOR MARRIEGE
              </p>
              <p className="w-36 h-[2px] bg-pink-600 m-2 "></p>
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

            <div className="w-full flex flex-col sm:flex-row">
              <GirlForm />
              <BoyForm />
            </div>
            {/* <button
              type="submit"
              className="bg-rose-500 w-40 text-white py-2 px-4 rounded-full hover:bg-rose-600 focus:outline-none"
            >
              Generate Kundli
            </button> */}
          </div>
        </div>
      </Layout>
    </div>
  );
  F;
};

export default MatchKundali;
