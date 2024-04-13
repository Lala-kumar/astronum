import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { Button, Empty } from "antd";

const MyAccount = () => {
  const navigate = useNavigate();
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
                title: <span className="text-white">Order</span>,
              },
            ]}
          />
        </h1>

        <main className="min-h-screen ">
          <div className="mt-20">
            <Empty description={<span>No orders yet!</span>}>
              <Button type="primary" onClick={()=> navigate("/pooja")}>Order Now</Button>
            </Empty>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
