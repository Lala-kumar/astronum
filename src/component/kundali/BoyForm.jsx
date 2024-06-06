import React, { useState } from "react";

const initialData = {
  name: "",
  gender: "boy",
  dateOfBirth: {
    day: "",
    month: "",
    year: "",
  },
  placeOfBirth: "",
};

const BoyForm = () => {
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

  const [formData, setFormData] = useState(initialData);

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
    console.log(formData);
    setFormData(initialData);
  };
  return (
    <>
      {" "}
      <form
        onSubmit={handleSubmit}
        className="max-w-md text-gray-700 text-sm mx-auto p-3 shadow-2xl bg-white rounded-xl"
      >
        <h1 className="text-center py-1 font-semibold text-lg mb-3 bg-rose-100 rounded-lg text-rose-400">
          Enter Boy's Details
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

        {/* <div className="mb-4">
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
        </div> */}

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
          className="bg-rose-500 w-full text-white py-2 px-4 rounded-full hover:bg-rose-600 focus:outline-none"
        >
          Generate Kundli
        </button>
      </form>
    </>
  );
};

export default BoyForm;
