import React from "react";

const BoyForm = ({ formData, setFormData }) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "day" || name === "month" || name === "year") {
      setFormData({
        ...formData,
        boydateOfBirth: {
          ...formData.boydateOfBirth,
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

  return (
    <form className="w-full text-gray-700 text-sm p-3 bg-white">
      <h1 className="text-center py-1 font-semibold text-lg mb-3 bg-rose-100 rounded-lg text-rose-400">
        Enter Boy's Details
      </h1>
      <div className="mb-4">
        <label htmlFor="boyname" className="block mb-1 ">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="boyname"
          name="boyname"
          value={formData.boyname}
          placeholder="Enter Full Name Here"
          onChange={handleChange}
          className="w-full px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:border-rose-300"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 ">
          Date of Birth<span className="text-red-600">*</span>
        </label>
        <div className="flex">
          <select
            id="day"
            name="day"
            value={formData.boydateOfBirth.day}
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
            value={formData.boydateOfBirth.month}
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
            value={formData.boydateOfBirth.year}
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
        <label htmlFor="boyplaceOfBirth" className="block  mb-1">
          Place of Birth<span className="text-red-600">*</span>
        </label>
        <input
          id="boyplaceOfBirth"
          name="boyplaceOfBirth"
          value={formData.boyplaceOfBirth}
          onChange={handleChange}
          placeholder="City, State, Country"
          required
          className="w-full  px-4 py-2 border border-rose-200 rounded-md focus:outline-none focus:border-rose-300"
        />
      </div>
    </form>
  );
};

export default BoyForm;
