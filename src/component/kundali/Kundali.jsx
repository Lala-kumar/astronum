/* eslint-disable react/no-unescaped-entities */
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useState } from "react";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router";
import kundali from "../../assets/kundali.jpg";

const initialData = {
  name: "",
  gender: "",
  dateOfBirth: {
    day: "",
    month: "",
    year: "",
  },
  timeOfBirth: {
    hours: "",
    minutes: "",
    clock: "",
  },
  placeOfBirth: "",
  notIncludeTime: false,
};

const Kundali = () => {
  const navigate = useNavigate();

  // Generate options for date (1-31)
  const dateOptions = Array.from({ length: 31 }, (_, i) => i + 1).map(
    (date) => (
      <option key={date} value={date}>
        {date}
      </option>
    )
  );

  // Generate options for Hours (1-12)
  const hoursOption = Array.from({ length: 12 }, (_, i) => i + 1).map(
    (hours) => (
      <option key={hours} value={hours}>
        {hours}
      </option>
    )
  );

  // Generate options for Hours (1-12)
  const minutesOption = Array.from({ length: 59 }, (_, i) => i + 1).map(
    (minutes) => (
      <option key={minutes} value={minutes}>
        {minutes}
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

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "day" || name === "month" || name === "year") {
      setFormData({
        ...formData,
        dateOfBirth: {
          ...formData.dateOfBirth,
          [name]: value,
        },
      });
    } else if (name === "notIncludeTime") {
      setFormData({
        ...formData,
        notIncludeTime: checked,
        timeOfBirth: checked
          ? { hours: "", minutes: "", clock: "" }
          : formData.timeOfBirth,
      });
    } else if (
      name === "name" ||
      name === "gender" ||
      name === "placeOfBirth"
    ) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        timeOfBirth: {
          ...formData.timeOfBirth,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialData);
  };

  return (
    <div className="">
      <Layout>
        <h1 className="font-bold px-4 sm:px-6 md:px-12 lg:px-20 text-center p-2 text-white bg-[#fbb62e]">
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
            <section className="font-bold mb-6 flex flex-col text-center p-2 mx-auto rounded-md items-center justify-center ">
              <p className="text-xl opacity-80">
                GENERATE YOUR FREE
                <span className="text-amber-500">JANAM KUNDALI</span>
              </p>
              <p className="w-36 h-[2px] bg-amber-400 m-2 "></p>
            </section>

            <section className="flex flex-col md:flex-row lg:flex-row mb-6 justify-center items-center">
              <img
                src={kundali}
                alt="Kundali"
                className="rounded-full h-24 w-24 mr-2"
              />

              <p className=" text-justify content-top">
                Kundli is the term used for Birth Chart in Vedic Astrology.
                Twelve houses of Kundli show ascendant and planet position in
                various zodiac signs at the time of birth as seen from the place
                of birth. Twelve houses of Kundli show ascendant and planet
                position in various zodiac signs at the time of birth as seen
                from the place of birth.
              </p>
            </section>

            <form
              onSubmit={handleSubmit}
              className="max-w-xl text-gray-700 text-sm mx-auto p-3 shadow-2xl bg-white rounded-xl"
            >
              <h1 className="text-center py-1 font-semibold text-lg mb-3 bg-rose-100 rounded-lg text-rose-400">
                Enter Details{" "}
              </h1>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 ">
                  Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Full Name Here"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:border-rose-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block mb-1 ">
                  Gender<span className="text-red-600">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full text-gray-700  px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:border-rose-300"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block mb-1 ">
                  Date of Birth<span className="text-red-600">*</span>
                </label>
                <div className="flex">
                  <select
                    id="day"
                    name="day"
                    value={formData.dateOfBirth.day}
                    onChange={handleChange}
                    className="w-1/3  px-4 py-2 border  border-rose-200 rounded-l-md focus:outline-none focus:border-rose-300"
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
                    className="w-1/3  px-4 py-2 border border-rose-200 focus:outline-none focus:border-rose-300"
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
                    className="w-1/3  px-4 py-2 border border-rose-200 rounded-r-md focus:outline-none focus:border-rose-300"
                    required
                  >
                    <option value="">Year</option>
                    {yearOptions}
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="mb-1  flex justify-between items-center content-center">
                  <span>Time of Birth</span>
                  <span className="">
                    <input
                      type="checkbox"
                      id="notIncludeTime"
                      name="notIncludeTime"
                      checked={formData.notIncludeTime}
                      onChange={handleChange}
                    />
                    <span className="text-xs"> Don't Know Birth Time </span>
                  </span>
                </label>

                <div className="flex">
                  <select
                    type="number"
                    id="hours"
                    name="hours"
                    value={formData.timeOfBirth.hours}
                    onChange={handleChange}
                    disabled={formData.notIncludeTime}
                    required
                    className="w-1/3  px-4 py-2 border border-rose-200 rounded-l-md focus:outline-none focus:border-rose-300"
                  >
                    <option value="">Hours</option>
                    {hoursOption}
                  </select>

                  <select
                    id="minutes"
                    name="minutes"
                    value={formData.timeOfBirth.minutes}
                    onChange={handleChange}
                    disabled={formData.notIncludeTime}
                    required
                    className="w-1/3   px-4 py-2 border border-rose-200 focus:outline-none focus:border-rose-300"
                  >
                    <option value="">Minutes</option>
                    {minutesOption}
                  </select>

                  <select
                    id="clock"
                    name="clock"
                    value={formData.timeOfBirth.clock}
                    onChange={handleChange}
                    disabled={formData.notIncludeTime}
                    required
                    className="w-1/3  px-4 py-2 border border-rose-200 rounded-r-md focus:outline-none focus:border-rose-300"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="placeOfBirth" className="block  mb-1">
                  Place of Birth<span className="text-red-600">*</span>
                </label>
                <input
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleChange}
                  placeholder="City, State, Country"
                  required
                  className="w-full  px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:border-rose-300"
                />
              </div>
              <button
                type="submit"
                className="bg-amber-500 w-full text-white py-2 px-4 rounded-full hover:bg-amber-600 focus:outline-none"
              >
                Generate Kundli
              </button>
            </form>
          </div>
          <section className=" mb-6 flex flex-col p-2 mx-auto rounded-md items-center justify-center ">
            <p className="text-xl text-center font-bold opacity-80">
              WHAT JANAM KUNDALI ACTUALLY IS
            </p>
            <p className="w-36 h-[2px] bg-amber-400 m-2 mb-6 "></p>

            <div className="text-justify">
              <p>
                {" "}
                Janam Kundali (birth chart or horoscope), is an astrological
                chart created based on the time, date, and place of a person's
                birth. It is a fundamental tool in Vedic astrology and is used
                to provide insights into various aspects of an individual's
                life. Here are some key points about Janam Kundali:
              </p>
              <ol className="list-disc list-inside">
                <li className="mt-4">
                  <strong>Planetary Positions:</strong> The Janam Kundali
                  depicts the positions of celestial bodies such as the Sun,
                  Moon, planets, and lunar nodes (Rahu and Ketu) at the time of
                  birth.
                </li>
                <li>
                  <strong>12 Houses:</strong> The Kundali is divided into 12
                  houses, each representing different aspects of life, such as
                  career, relationships, health, wealth, etc.
                </li>
                <li>
                  <strong>Ascendant (Lagna):</strong> The sign rising on the
                  eastern horizon at the time of birth is known as the Ascendant
                  or Lagna.
                </li>
                <li>
                  <strong>Planetary Aspects:</strong> Planets in the Kundali
                  cast aspects on other planets or houses, influencing their
                  significance and outcomes.
                </li>
                <li>
                  <strong>Dasha System:</strong> The Janam Kundali also includes
                  information about the Dasha system, which reveals the timing
                  of major life events and the influence of planetary periods
                  (Dashas) and sub-periods (Antardashas).
                </li>
                <li>
                  <strong>Yogas and Doshas:</strong> Certain combinations of
                  planets and their placements in specific houses create Yogas
                  (auspicious combinations) or Doshas (malefic combinations).
                </li>
              </ol>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Kundali;
