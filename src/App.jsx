import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Rating from "./component/rating/Rating";
import MyAccount from "./component/account/MyAccount";
import AstroAccount from "./component/account/AstroAccount";

import Notification from "./component/notification/Notification";
import Login from "./component/login/Login";
import SignUp from "./component/signup/Signup";
import AstroLogin from "./component/astrologers/AstroLogin";
import AstroRegister from "./component/astrologers/AstroRegister";
import AstroDetails from "./component/astrologers/AstroDetails";
import Pooja from "./component/pooja/Pooja";
import MyWallet from "./component/wallet/MyWallet";
import AddMoney from "./component/addmoney/AddMoney";
import Order from './component/order/Order'
import Kundali from './component/kundali/Kundali'
import Callingreq from './component/astrologers/CallingRequest'

import TodaysHorscope from './component/horoscope/TodaysHorscope'

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/rating", element: <Rating /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/astroaccount", element: <AstroAccount /> },
    { path: "/notification", element: <Notification /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/astrologer-login", element: <AstroLogin /> },
    { path: "/astrologer-register", element: <AstroRegister /> },
    { path: "/call-req", element: <Callingreq /> },
    { path: "/astrologer/:id", element: <AstroDetails /> },
    { path: "/pooja", element: <Pooja /> },
    { path: "/my-wallet", element: <MyWallet /> },
    { path: "/my-wallet/add-money", element: <AddMoney /> },
    { path: "/order", element: <Order /> },
    { path: "/kundali", element: <Kundali /> },
    { path: "/TodaysHorscope", element: <TodaysHorscope /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
