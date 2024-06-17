import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import MyAccount from "./component/account/MyAccount";
import Notification from "./component/notification/Notification";
import Login from "./component/login/Login";
import SignUp from "./component/signup/Signup";
import AstroLogin from "./component/astrologers/AstroLogin";
import AstroRegister from "./component/astrologers/AstroRegister";
import AstroDetails from "./component/astrologers/AstroDetails";
import Pooja from "./component/pooja/Pooja";
import MyWallet from "./component/wallet/MyWallet";
import AddMoney from "./component/addmoney/AddMoney";
import Order from "./component/order/Order";
import Kundali from "./component/kundali/Kundali";
import MatchKundali from "./component/kundali/MatchKundali";
import NoPage from "./component/nopage/NoPage";
import AstroAccount from "./component/account/AstroAccount";
import MyProvider from "./context/MyProvider";
import UserCallHistory from "./component/calling/UserCallHistory";
import ConsultationRequest from "./component/calling/ConsultationRequest";
import RechargeSuccess from "./component/recharge result/RechargeSuccess";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NoPage /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/astro-account", element: <AstroAccount /> },
    { path: "/notification", element: <Notification /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/astrologer-login", element: <AstroLogin /> },
    { path: "/astrologer-register", element: <AstroRegister /> },
    { path: "/astrologer/:id", element: <AstroDetails /> },
    { path: "/pooja", element: <Pooja /> },
    { path: "/my-wallet", element: <MyWallet /> },
    { path: "/my-wallet/add-money", element: <AddMoney /> },
    { path: "/my-wallet/add-money/:id", element: <RechargeSuccess /> },
    { path: "/order", element: <Order /> },
    { path: "/kundali", element: <Kundali /> },
    { path: "/match-kundali", element: <MatchKundali /> },
    { path: "/call-history", element: <UserCallHistory /> },
    { path: "/consultation-request", element: <ConsultationRequest /> },
  ]);

  return (
    <div>
      <MyProvider>
        <RouterProvider router={router} />
      </MyProvider>
    </div>
  );
};

export default App;
