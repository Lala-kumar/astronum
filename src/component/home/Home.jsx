import React from "react";
import Layout from "../layout/Layout";
import Astrologers from "../astrologers/Astrologers";

const Home = () => {
  return (
    <Layout>
      <div className="h-full my-10">
        <Astrologers />
      </div>
    </Layout>
  );
};

export default Home;
