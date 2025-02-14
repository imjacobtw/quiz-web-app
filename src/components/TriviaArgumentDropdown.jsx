import PropTypes from "prop-types";

export default function TriviaArgumentDropdown({
  parameter,
  argument,
  setArgument,
}) {
  return (
    <select
      className="bg-white text-red-orange px-5 py-3 rounded-full uppercase w-[60vw] sm:w-[500px]"
      value={argument}
      onChange={(e) => setArgument(e.target.value)}
    >
      {parameter.args.map((arg, index) => {
        return (
          <option
            className="bg-white text-red-orange focus:outline-red-orange text-center uppercase"
            value={arg.value}
            key={index}
          >
            {arg.text}
          </option>
        );
      })}
    </select>
  );
}

TriviaArgumentDropdown.propTypes = {
  parameter: PropTypes.object.isRequired,
  argument: PropTypes.string,
  setArgument: PropTypes.func.isRequired,
};
