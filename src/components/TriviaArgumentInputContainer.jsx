import PropTypes from "prop-types";

export default function TriviaArgumentInputContainer({ label, children }) {
  return (
    <div className="flex items-center justify-end my-5">
      <label className="mr-5 font-medium hidden lg:block">{label}:</label>
      {children}
    </div>
  );
}

TriviaArgumentInputContainer.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
