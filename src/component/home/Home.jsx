import React from "react";
import Layout from "../layout/Layout";
import Astrologers from "../astrologers/Astrologers";

const Home = () => {
  return (
    <div>
      <Layout>
        <div className="min-h-screen my-10">
          <Astrologers />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
