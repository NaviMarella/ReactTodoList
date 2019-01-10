import React, { Component } from 'react';
import "./Checkbox.css";

class Checkbox extends Component {
  toggleCheckboxChange = (e) => {
    const { handleCheckboxChange } = this.props;
    handleCheckboxChange();
  }

  render() {
    const { label, isChecked } = this.props;

    return (
      <div className="checkbox_container" >
        <label className="container">
            {label}
            <input type="checkbox" onChange={(e) => this.toggleCheckboxChange(e)} checked={isChecked}  />
            <span className="checkmark"></span>
        </label>
      </div>
    );
  }
}

export default Checkbox;