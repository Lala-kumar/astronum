import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Result } from "antd";
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
          <Result
            status="success"
            title="Recharge Successfull!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button
                onClick={() => navigate("/my-wallet")}
                type="primary"
                key="console"
              >
                Go to Wallet
              </Button>,
              <Button
                key="buy"
                onClick={() => navigate("/my-wallet/add-money")}
              >
                Recharge Again
              </Button>,
            ]}
          />
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
