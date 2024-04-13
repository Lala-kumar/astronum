import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";

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

        <main className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <section className="mt-6 items-center">
            <h1 className="text-center font-semibold">
              There are no orders yet!
            </h1>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
