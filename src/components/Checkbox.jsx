import PropTypes from 'prop-types';
import React from 'react';
import "./Checkbox.css";

const Checkbox = ({ label, isChecked, handleCheckboxChange }) => {
  return (
    <div className="checkbox_container" >
        <label className="container">
            {label}
            <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked}  />
            <span className="checkmark"></span>
        </label>
      </div>
  )
}

Checkbox.defaultProps = {
  type: "checkbox"
}

Checkbox.propTypes = {
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  handleCheckboxChange: PropTypes.func.isRequired
};


export default Checkbox;