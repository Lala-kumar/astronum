import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Empty } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const Notification = () => {
  const navigate = useNavigate();
  const { notification } = useContext(MyContext);

  return (
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
              title: <span className="text-white">Notifications</span>,
            },
          ]}
        />
      </h1>

      <div className="min-h-screen">
        <h1 className="font-bold my-6 text-center p-2 mx-auto w-72 rounded-md bg-[#fbb62e]">
          Notifications
        </h1>

        {notification.length === 0 ? (
          <Empty description="No new notifications" />
        ) : (
          <div className="container mx-auto max-w-2xl">
            <ul className="w-full container mx-auto">
              {notification.map((not) => (
                <li
                  style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
                  className="mx-2 mb-4 border rounded-xl h-auto cursor-pointer"
                  key={not.id}
                >
                  <div className="w-full">
                    <h1 className="font-bold pl-2 pt-3">
                      {not.astro_data.first_name}
                    </h1>
                    <p className="text-sm p-2 text-justify ">
                      {not.astro_data.first_name} has accepted your call
                      request. He will get back to you.
                    </p>
                    <p className="flex text-xs items-end justify-end  text-gray-700 mr-3 pb-1">
                      {not.request_date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Notification;
