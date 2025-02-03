import PropTypes from "prop-types";

export default function QuizAttributeSelector({ labelText, attributeOptions }) {
  const attributeOptionElements = attributeOptions.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className="bg-primary d-flex flex-row justify-content-center align-items-center">
      <label className="w-50">{labelText}:</label>
      <select className="form-select" aria-label="Default select example">
        {attributeOptionElements}
      </select>
    </div>
  );
}

QuizAttributeSelector.propTypes = {
  labelText: PropTypes.string,
  attributeOptions: PropTypes.array,
};
