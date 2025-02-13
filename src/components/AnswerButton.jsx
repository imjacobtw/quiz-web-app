import PropTypes from "prop-types";

export default function AnswerButton({
  children,
  isRevealed,
  isCorrectAnswer,
  onClick,
}) {
  let classColors = "bg-white text-navy-blue hover:bg-white/60";

  if (isRevealed) {
    if (isCorrectAnswer) {
      classColors = "bg-green-500 text-white hover:bg-green-500/60"
    } else {
      classColors = "bg-red-500 text-white hover:bg-red-500/60"
    }
  }

  return (
    <button
      className={`${classColors} py-3 px-5 rounded-full cursor-pointer mb-5 transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

AnswerButton.propTypes = {
  children: PropTypes.string.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  isCorrectAnswer: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
