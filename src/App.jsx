import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/home/Home";
import Rating from "./component/rating/Rating";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/rating", element: <Rating /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
