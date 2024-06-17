import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, message } from "antd";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const user = JSON.parse(localStorage.getItem("user"));

const MyAccount = () => {
  const navigate = useNavigate();
  const { ReloadTransaction, walletBalance, setWalletBalance } =
    useContext(MyContext);

  // ********************** Recharge Section  **********************
  const HandleRecharge = async (amount) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_SERVER_URL + "api/users/walletRecharge",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.access_token}`,
          },
          body: JSON.stringify({ user_id: user?.userID, amount: amount }),
        }
      );

      if (!response.ok) {
        throw new Error("Error recharge!");
      }

      const data = await response.json();
      if (data.status === "success") {
        message.success("Recharge Successfully!");
        ReloadTransaction();
        setWalletBalance((prev) => prev + amount);
        navigate("/my-wallet/add-money/1");
      } else {
        message.error("Recharge Failed");
        navigate("/my-wallet/add-money/2");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

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
              Available Balance :
              <span className="text-lg font-semibold"> ₹ {walletBalance}</span>
            </h1>
          </section>

          {/* add money */}
          <section>
            <h1 className="my-6 text-lg font-semibold">Popular Recharge</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mt-1">
              <button
                onClick={() => HandleRecharge(25)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 25
              </button>
              <button
                onClick={() => HandleRecharge(50)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 50
              </button>
              <button
                onClick={() => HandleRecharge(100)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 100
              </button>
              <button
                onClick={() => HandleRecharge(200)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 200
              </button>
              <button
                onClick={() => HandleRecharge(500)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 500
              </button>
              <button
                onClick={() => HandleRecharge(1000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 1000
              </button>
              <button
                onClick={() => HandleRecharge(2000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 2000
              </button>
              <button
                onClick={() => HandleRecharge(3000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 3000
              </button>
              <button
                onClick={() => HandleRecharge(4000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 4000
              </button>
              <button
                onClick={() => HandleRecharge(5000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 5000
              </button>
              <button
                onClick={() => HandleRecharge(10000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 10000
              </button>
              <button
                onClick={() => HandleRecharge(20000)}
                className="bg-green-100 border hover:border hover:border-green-500 text-gray-800 font-semibold py-8 px-4 rounded"
              >
                ₹ 20000
              </button>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default MyAccount;
