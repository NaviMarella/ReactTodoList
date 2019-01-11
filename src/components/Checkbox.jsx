import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "./Checkbox.css";

class Checkbox extends Component {
  toggleCheckboxChange = () => {
    const { handleCheckboxChange } = this.props;
    handleCheckboxChange();
  }

  render() {
    const { label, isChecked } = this.props;

    return (
      <div className="checkbox_container" >
        <label className="container">
            {label}
            <input type="checkbox" onChange={this.toggleCheckboxChange} checked={isChecked}  />
            <span className="checkmark"></span>
        </label>
      </div>
    );
  }
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