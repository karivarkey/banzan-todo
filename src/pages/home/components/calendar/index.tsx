import { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "./style.css";

const ThemedDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="date-picker-container">
      <DatePicker
        onChange={setDate}
        value={date}
        className="custom-date-picker"
      />
    </div>
  );
};

export default ThemedDatePicker;
