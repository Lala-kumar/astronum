import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Rating from "./component/rating/Rating";
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
 
import MyProvider from "./store/MyProvider";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NoPage /> },
    { path: "/rating", element: <Rating /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/notification", element: <Notification /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/astrologer-login", element: <AstroLogin /> },
    { path: "/astrologer-register", element: <AstroRegister /> },
    { path: "/astrologer/1", element: <AstroDetails /> },
    { path: "/pooja", element: <Pooja /> },
    { path: "/my-wallet", element: <MyWallet /> },
    { path: "/my-wallet/add-money", element: <AddMoney /> },
    { path: "/order", element: <Order /> },
    { path: "/kundali", element: <Kundali /> },
    { path: "/match-kundali", element: <MatchKundali /> },
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
