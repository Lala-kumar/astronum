import React, { useState } from "react";
import { Rate } from "antd";

const Rating = () => {
  const [rating, setRating] = useState(1);

  const handleRateChange = (value) => {
    console.log("User rating:", value);
    setRating(value); // Update the rating in the state
  };

  return <Rate autoFocus value={rating} onChange={handleRateChange} />;
};

export default Rating;
