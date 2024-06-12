
import Layout from "../layout/Layout";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useNavigate } from "react-router";
import lakshmiImg from "../../assets/lakshmi.jpeg";
import ganeshaImg from "../../assets/ganesha.jpeg";
import shivaImg from "../../assets/shiva.jpeg";
import vishnuImg from "../../assets/vishnu.jpeg";
import saraswatiImg from "../../assets/saraswati.jpeg";
import shaniImg from "../../assets/shani.jpeg";

const poojaData = [
  {
    name: "Maa Lakshmi Pooja",
    description:
      "Pooja for welcoming of wealth, good fortune, prosperity and abundance.",
    price: "Starting from ₹5,100.00",
    image: lakshmiImg,
  },
  {
    name: "Shiv Pooja",
    description:
      "Pooja for good health, harmonious relationships, and material prosperity.",
    price: "Starting from ₹7,100.00",
    image: shivaImg,
  },
  {
    name: "Shree Shani Pooja",
    description: "Pooja for Planetary & health issues, delays in marriage",
    price: "Starting from ₹9,100.00",
    image: shaniImg,
  },
  {
    name: "Shree Satyanarayn Pooja",
    description: "Pooja for family harmony and unity within the family.",
    price: "Starting from ₹2,100.00",
    image: vishnuImg,
  },
  {
    name: "Sarashvati Pooja",
    description: "Pooja for Success in competitive exams & education",
    price: "Starting from ₹11,100.00",
    image: saraswatiImg,
  },
  {
    name: "Shree Ganesh Pooja",
    description: "Pooja for success, prosperity, and the removal of obstacles.",
    price: "Starting from ₹2,100.00",
    image: ganeshaImg,
  },
];

const Pooja = () => {
  const navigate = useNavigate();

  return (
    <div className="">
      <Layout>
        {/* BreadCrumbs */}
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20  text-center p-2 text-white bg-[#fbb62e]">
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
                title: <span className="text-white">Book A Pooja</span>,
              },
            ]}
          />
        </h1>

        <h1 className="font-bold bg-amber-100 mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
          <p className="text-xl"> MOST BOOKED PUJAS</p>
          <p className="w-36 h-[2px] bg-amber-400 m-2 "></p>
        </h1>

        {/* Render Pooja Items */}
        <section className="flex flex-wrap justify-center items-start">
          {poojaData.map((pooja, index) => (
            <div
              className="p-1 rounded-3xl lg:w-1/4 md:w-1/3 justify-center items-center"
              key={index}
              style={{ width: "auto", height: "400px" }} // Set width and height here
            >
              <div className="border-amber-400 border h-full bg-contain rounded-3xl flex flex-col">
                <section className="flex bg-fit m-2 justify-center cursor-pointer">
                  <img
                    className=" rounded-3xl object-cover max-w-[3000px] bg-red-500 h-80 overflow-hidden"
                    src={pooja.image}
                    alt="blog"
                    style={{ width: "100%", height: "200px" }} // Set width and height here
                  />
                </section>
                <section className="p-4 flex-grow">
                  <h1 className="title-font  font-medium text-gray-900">
                    {pooja.name}
                  </h1>
                  <p className="text-rose-500 max-w-80 text-sm mb-3">
                    {pooja.description}
                  </p>

                  <p className="leading-relaxed mb-3 text-xs text-amber-700">
                    {pooja.price}
                  </p>
                  <div>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-amber-400 hover:bg-[#fbb62e] focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm w-full py-2"
                    >
                      Book
                    </button>
                  </div>
                </section>
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </div>
  );
};

export default Pooja;
