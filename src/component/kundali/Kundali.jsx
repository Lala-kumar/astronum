import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import kundalilogo from "../../assets/kundalilogo.svg";
import kundali from "../../assets/kundali.jpg";

const Notification = () => {
  const navigate = useNavigate();

  // Generate options for date (1-31)
  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1).map(
    (date) => (
      <option key={date} value={date}>
        {date}
      </option>
    )
  );

  // Generate options for month
  const monthOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((month, index) => (
    <option key={index + 1} value={index + 1}>
      {month}
    </option>
  ));

  // Generate options for year (1920-2024)
  const yearOptions = Array.from({ length: 105 }, (_, i) => 2024 - i).map(
    (year) => (
      <option key={year} value={year}>
        {year}
      </option>
    )
  );

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dateOfBirth: {
      day: "",
      month: "",
      year: "",
    },
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "day" || name === "month" || name === "year") {
      setFormData({
        ...formData,
        dateOfBirth: {
          ...formData.dateOfBirth,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to generate Kundali using formData
    console.log(formData);
  };

  return (
    <div className="bg-pink-50">
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-pink-700">
          <Breadcrumb
            className="text-gray-50"
            separator={<span style={{ color: "white" }}>&gt;</span>}
            items={[
              {
                title: (
                  <HomeOutlined
                    onClick={() => navigate("/")}
                    style={{ color: "white", fontSize: "20px" }}
                  />
                ),
              },

              {
                title: <span className="text-white">Kundali</span>,
              },
            ]}
          />
        </h1>

        <div className="min-h-screen mx-4 sm:mx-6 md:mx-12 lg:mx-20">
          <div className="container mx-auto py-8 ">
            <section className="p-2 flex flex-col items-center">
              <div>
                <p className=" text-justify content-top">
                  <span className="inline-flex">
                    <img
                      src={kundali}
                      alt="Kundali"
                      className="inline border-4 mr-1 self-center border-gray-950 h-10 w-10"
                    />
                  </span>
                  Kundli is the term used for Birth Chart in Vedic Astrology.
                  Twelve houses of Kundli show ascendant and planet position in
                  various zodiac signs at the time of birth as seen from the
                  place of birth. Twelve houses of Kundli show ascendant and
                  planet position in various zodiac signs at the time of birth
                  as seen from the place of birth.
                </p>
              </div>
            </section>

            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto p-3 shadow-2xl bg-white"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Full Name Here"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block mb-1">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Date of Birth</label>
                <div className="flex">
                  <select
                    id="day"
                    name="day"
                    value={formData.dateOfBirth.day}
                    onChange={handleChange}
                    className="w-1/3 px-4 py-2 border rounded-l-md focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Day</option>
                    {dateOptions}
                  </select>
                  <select
                    id="month"
                    name="month"
                    value={formData.dateOfBirth.month}
                    onChange={handleChange}
                    className="w-1/3 px-4 py-2 border focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Month</option>
                    {monthOptions}
                  </select>
                  <select
                    id="year"
                    name="year"
                    value={formData.dateOfBirth.year}
                    onChange={handleChange}
                    className="w-1/3 px-4 py-2 border rounded-r-md focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Year</option>
                    {yearOptions}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="timeOfBirth" className="block mb-1">
                  Time of Birth
                </label>
                <input
                  type="time"
                  id="timeOfBirth"
                  name="timeOfBirth"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="placeOfBirth" className="block mb-1">
                  Place of Birth
                </label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  placeholder="City, State, Country"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 w-full text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Generate Kundli
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Notification;
