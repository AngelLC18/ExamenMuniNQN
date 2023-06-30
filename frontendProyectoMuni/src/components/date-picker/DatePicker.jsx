import React from "react";
import PropTypes from "prop-types";

const DatePicker = ({ label, name, value, onChange }) => {
  const [date, setDate] = React.useState(value);
  const handleChange = (e) => {
    setDate(e.target.value);
    onChange(e);
  };

  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        className="h-11 w-56 bg-transparent pl-2 dark:text-white border-black border-[1px] rounded-[4px] border-opacity-30 outline-none focus:border-blue-700 placeholder-gray-300 placeholder-opacity-0 transition duration-200 pr-2"
        id={name}
        name={name}
        value={date}
        onChange={handleChange}
      />
    </div>
  );
};

DatePicker.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
