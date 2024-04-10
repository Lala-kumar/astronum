import React from "react";
import Layout from "../layout/Layout";
import logo from "../../assets/astro.jpg";
import { FaStar } from "react-icons/fa6";

const AstroDetails = () => {
  return (
    <div className="">
      <Layout>
        <div className="h-full">
          <main className="mb-6">
            <div className="">
              <section className="w-full mx-auto flex lg:flex-row md:flex-row flex-col sm:flex-col  m-4 bg-white">
                <div className="m-1 mx-10">
                  <img
                    src={logo}
                    alt="Astrologer"
                    className="mx-auto border rounded-full h-[200px] w-[200px] m-1 bg-slate-100"
                  />
                </div>

                <div className="m-4 mx-auto ">
                  <p className="mb-2 text-2xl font-bold">Moolchand</p>
                  <p className=" mb-2 text-md text-gray-500">
                    Vedic, Numerology, Vastu, Prashana{" "}
                  </p>
                  <p className=" mb-2 text-gray-600">Hindi, English</p>
                  <p className="text-gray-600 mb-2">Exp: 1 Year</p>
                  <p className="text-md mb-2">
                    <span className="text-rose-600 font-bold">FREE</span>{" "}
                    <span className="line-through">10/min</span>
                  </p>

                  <div className="flex text-yellow-500 mb-2">
                    <p className="mr-2 text-gray-700 text-center ">Rating: </p>
                    <span>
                      <FaStar className="mt-1" />
                    </span>
                    <span>
                      <FaStar className="mt-1" />
                    </span>
                    <span>
                      <FaStar className="mt-1" />
                    </span>
                    <span>
                      <FaStar className="mt-1" />
                    </span>
                    <span>
                      <FaStar className="mt-1" />
                    </span>
                  </div>
                </div>

                <section className="m-auto mb-8">
                  <div className="hover:cursor-pointer hover:bg-orange-400 hover:text-white flex border-2 border-orange-400 my-auto w-64 h-12 items-center justify-center rounded-full ">
                    <section className="">
                      <p className="font-bold text-sm opacity-80 ">Call</p>
                      <p className="font-bold text-sm opacity-80">Busy</p>
                    </section>
                    <div className="mx-4 opacity-90">|</div>

                    <section className="">
                      <p className="text-xs line-through ">10/min</p>
                      <p className="font-bold text-md  opacity-80 text-rose-600 ">
                        Free
                      </p>
                    </section>
                  </div>
                </section>
              </section>

              <div className="my-6">
                <h1 className="mx-6 mb-6 font-bold text-xl">Specialization</h1>
                <div className="mx-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Career & Job
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Break-Up & Divorce
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Cheating & Affairs
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Marital Life
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Love & Relationship
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Kids & Education
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Vedic Astrology
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Numerology
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Finance & Business
                  </p>
                  <p className="text-center rounded-full py-2 bg-pink-200">
                    {" "}
                    Tarot Reading
                  </p>
                </div>
              </div>

              <div className="my-6">
                <h1 className="mx-6 mb-6 font-bold text-xl">About Me</h1>
                <h4 className="mx-6 text-justify">
                  I have always been passionate about Astrology, Numerology, and
                  Tarot. I've been learning & exploring these mystical arts
                  since my teenage years. In 2004, a special connection
                  blossomed with Tarot. It felt like a calling. Since then, I've
                  been on a mission to learn all I can about it. Books, courses,
                  you name it—I've dabbled in them all. It's like putting
                  together pieces of a beautiful cosmic puzzle. One remarkable
                  journey took me to the serene Ashram of Sri Sri Ravishankar
                  Guruji. There, I met an insightful Australian mentor. Through
                  her, I delved even deeper into the world of Tarot. With all
                  that I have learnt in all these years, I am here to hep you
                  solve & understand all of the life's phases through my
                  expertise, intuitive abilities and insights.
                </h4>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    </div>
  );
};

export default AstroDetails;
