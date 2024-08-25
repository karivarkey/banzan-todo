import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "./style.css";

const ThemedDatePicker = ({ selected, onChange, className }) => {
  return (
    <div className="date-picker-container">
      <DatePicker
        onChange={(date) => onChange(date)}
        value={selected ?? null} // Convert undefined to null
        className={`custom-date-picker ${className}`}
      />
    </div>
  );
};

export default ThemedDatePicker;
