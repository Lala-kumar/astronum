import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { Empty } from "antd";

const MyAccount = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout>
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
                title: <span className="text-white">My Wallet</span>,
              },
            ]}
          />
        </h1>

        <main className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <section className="flex mt-6 items-center">
            <p className="text-green-600 mr-2 pb-3">Available balance: ₹ 0</p>
            <button
              onClick={() => navigate("/my-wallet/add-money")}
              className="w-28 text-sm border-green-600 border hover:text-white py-2 px-2 m-1 rounded-md  hover:bg-green-500 text-green-600 mb-4"
            >
              Recharge
            </button>
          </section>
          <h1 className="text-center mt-5 mb-20 font-semibold opacity-85 text-2xl">
            Transactions
          </h1>
          <Empty description={<span>No Transaction yet!</span>}></Empty>
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
