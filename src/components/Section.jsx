import PropTypes from "prop-types";

export default function Section({ children }) {
  return (
    <div className="min-h-9/10 w-screen flex items-center justify-center bg-red-500 absolute top-0">
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
};
