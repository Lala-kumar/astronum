import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Table } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { Empty } from "antd";
import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/MyContext";

const columns = [
  {
    title: "S. No",
    dataIndex: "sNo",
    key: "sNo",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Date",
    dataIndex: "created_at",
    key: "created_at",
    render: (text) => text.split("T")[0],
  },
];

const user = JSON.parse(localStorage.getItem("user"));

const MyAccount = () => {
  const navigate = useNavigate();
  const { transaction } = useContext(MyContext);
  const [transactions, setTransactions] = useState([]);

  const data = transaction.map((tx, index) => ({
    key: index,
    sNo: index + 1,
    id: tx.id,
    amount: tx.amount,
    created_at: tx.created_at,
  }));

  const fetchTransaction = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/wallethistroy",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.access_token}`,
          },
          body: JSON.stringify({ userId: user?.userID }),
        }
      );

      if (!response.ok) {
        throw new Error("Error Fetching Transaction Response!");
      }

      const data = await response.json();

      console.log(data);

      if (data.status === "success") {
        setTransactions(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, []);

  return (
    <>
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
              className="w-28 text-sm border-green-600 border hover:text-white py-2 px-2 m-1 rounded-md hover:bg-green-500 text-green-600 mb-4"
            >
              Recharge
            </button>
          </section>
          <h1 className="text-center mt-4 mb-2 font-semibold opacity-85 text-2xl">
            Transactions History
          </h1>
          {transactions.length === 0 ? (
            <Empty description={<span>No Transaction yet!</span>}></Empty>
          ) : (
            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              pagination={{ pageSize: 10 }}
              scroll={{ x: true }}
            />
          )}
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
