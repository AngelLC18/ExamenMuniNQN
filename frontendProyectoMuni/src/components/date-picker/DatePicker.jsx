import PropTypes from "prop-types";
const DatePicker = (props) => {
  const { onChange } = props;
  return (
    <input
      type="date"
      className="border-black border-[1px] pl-2 rounded-[4px] outline-none border-opacity-30 bg-transparent  w-56 h-11 dark:bg-slate-700 dark:text-white text-gray-600 transition duration-200"
      onChange={onChange}
    />
  );
};
DatePicker.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default DatePicker;
