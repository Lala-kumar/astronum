import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

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
                title: (
                  <span
                    onClick={() => navigate("/my-wallet")}
                    className="text-white cursor-pointer"
                  >
                    My Wallet
                  </span>
                ),
              },
              {
                title: <span className="text-white">Add Money</span>,
              },
            ]}
          />
        </h1>

        <main className="min-h-screen mb-6 mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <section>
            <h1 className="text-2xl text-center opacity-85 font-bold my-4">
              Add Money to Wallet
            </h1>
            <h1 className="text-center opacity-85">
              Available Balance :{" "}
              <span className="text-lg font-semibold"> ₹ 0</span>{" "}
            </h1>
          </section>

          {/* add money */}
          <section>
            <h1 className="my-6 text-lg font-semibold">
              Popular Recharge
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-1">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index + 1}
                  className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
                >
                  ₹ {index + 1}
                </button>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
