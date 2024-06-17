/* eslint-disable react/prop-types */
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
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

// user protected route
export const ProtectedRouteForUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.status === "success") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

// astro protected route
export const ProtectedRouteForAstro = ({ children }) => {
  const astro = JSON.parse(localStorage.getItem("astro"));
  if (astro?.status === "success") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NoPage /> },
    {
      path: "/account",
      element: (
        <ProtectedRouteForUser>
          <MyAccount />
        </ProtectedRouteForUser>
      ),
    },
    { path: "/astro-account", element: <AstroAccount /> },
    {
      path: "/notification",
      element: (
        <ProtectedRouteForUser>
          <Notification />
        </ProtectedRouteForUser>
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/astrologer-login", element: <AstroLogin /> },
    { path: "/astrologer-register", element: <AstroRegister /> },
    { path: "/astrologer/:id", element: <AstroDetails /> },
    { path: "/pooja", element: <Pooja /> },
    {
      path: "/my-wallet",
      element: (
        <ProtectedRouteForUser>
          <MyWallet />
        </ProtectedRouteForUser>
      ),
    },
    {
      path: "/my-wallet/add-money",
      element: (
        <ProtectedRouteForUser>
          <AddMoney />
        </ProtectedRouteForUser>
      ),
    },
    {
      path: "/my-wallet/add-money/:id",
      element: (
        <ProtectedRouteForUser>
          <RechargeSuccess />
        </ProtectedRouteForUser>
      ),
    },
    { path: "/order", element: <Order /> },
    { path: "/kundali", element: <Kundali /> },
    { path: "/match-kundali", element: <MatchKundali /> },
    {
      path: "/call-history",
      element: (
        <ProtectedRouteForUser>
          <UserCallHistory />
        </ProtectedRouteForUser>
      ),
    },
    {
      path: "/consultation-request",
      element: (
        <ProtectedRouteForAstro>
          <ConsultationRequest />
        </ProtectedRouteForAstro>
      ),
    },
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
