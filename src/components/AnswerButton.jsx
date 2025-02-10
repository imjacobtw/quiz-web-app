import PropTypes from "prop-types";

export default function AnswerButton({ children }) {
  return (
    <button className="bg-white text-navy-blue py-3 px-5 rounded-full cursor-pointer mb-5 hover:bg-white/60 transition duration-300 ease-in-out">
      {children}
    </button>
  );
}

AnswerButton.propTypes = {
  children: PropTypes.string.isRequired,
};
