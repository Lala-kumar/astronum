import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Rating from "./component/rating/Rating";
import MyAccount from "./component/account/MyAccount";
import Notification from "./component/notification/Notification";
import Login from './component/login/Login'

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/rating", element: <Rating /> },
    { path: "/account", element: <MyAccount /> },
    { path: "/notification", element: <Notification /> },
    { path: "/login", element: <Login /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
