import { Link } from "react-router";
import PropTypes from "prop-types";

export default function ReturnToTriviaGenerationPageButton({
  children,
  onClick,
}) {
  return (
    <Link
      className="bg-red-orange rounded-full px-5 py-3 uppercase cursor-pointer hover:bg-red-orange/60 transition duration-300 ease-in-out"
      onClick={onClick}
      to="/trivia-web-app"
    >
      {children}
    </Link>
  );
}

ReturnToTriviaGenerationPageButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
};
