import Layout from "../layout/Layout";
import { Table } from "antd";
import { FiPhoneCall } from "react-icons/fi";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
  },
];

const data = [
  {
    key: "1",
    name: "Joe dean",
    date: "2023-01-01",
    duration: "30 mins",
  },
  {
    key: "2",
    name: "Jim Green",
    date: "2023-01-02",
    duration: "45 mins",
  },
  {
    key: "3",
    name: "Joe Black",
    date: "2023-01-03",
    duration: "25 mins",
  },
  {
    key: "4",
    name: "Astha sharma",
    date: "2023-01-03",
    duration: "25 mins",
  },
  {
    key: "5",
    name: "Gagan kumar",
    date: "2023-01-03",
    duration: "25 mins",
  },
  {
    key: "6",
    name: "Sameer teja",
    date: "2023-01-03",
    duration: "25 mins",
  },
];

const UserCallHistory = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Layout>
        <div className="min-h-screen">
          <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-[#fbb62e] mb-5">
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
                  title: <span className="text-white">Call History</span>,
                },
              ]}
            />
          </h1>
          <main className="mb-6 px-2 md:px-12 lg:px-20">
            <div className="flex items-center gap-2 pb-5">
              <FiPhoneCall className="text-green-600 ml-2" />
              <p className="font-semibold">Call History</p>
            </div>

            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={{ pageSize: 10 }}
              scroll={{ x: true }}
            />
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default UserCallHistory;
