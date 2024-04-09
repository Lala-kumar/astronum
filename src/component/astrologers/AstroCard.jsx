import React from "react";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

function AstrologyCard() {
  return (
    <>
      <div  style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }} className="main-div max-w-md h-[200px] bg-white flex flex-row justify-around items-center mt-20 shadow-xl ">
        <div className="left-box bg-slate-300 flex flex-col justify-between h-full items-center">
          <img
            className="h-[90px] w-[90px] rounded-full m-1"
            src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=612x612&w=0&k=20&c=12CUDMMzA78XFt16_0PynybQ5O4EBpNSIWSlYsCA8Zc="
            alt=""
          />
          <div className="flex ">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <p>5573 orders</p>
        </div>

        <div className="text-left bg-slate-400">
          <h3>Veer</h3>
          <h4>Vedic, Nadi, Numerology</h4>
          <h4>English, Tamil, Hindi</h4>
          <h4>Exp: 4 Years</h4>
          <h3 className="mt-10 text-red-600 font-bold">
            FREE{" "}
            <span className="text-black font-normal line-through">47 min</span>
          </h3>
        </div>

        <div className="right-div flex flex-col">
          <p className="text-green-500 text-end mb-20 ml-14">
            <MdVerified />
          </p>
          <button
            type="submit"
            class="border-green-500 text-green-500 hover:text-white hover:bg-green-500 border-solid border-2 rounded-lg px-6 py-1"
          >
            Chat
          </button>
          <h4 className="mb-8"></h4>
        </div>
      </div>
    </>
  );
}

export default AstrologyCard;
