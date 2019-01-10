import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Input.css";

class Input extends Component{
    handleInputChange = (e) => {
        const { handleInput } = this.props;
        handleInput(e.target.value);
    }

    render(){
        const { type, value, maxLength, placeholder } = this.props;
        return (
            <div className="input_container">
                <input type={type} maxLength={maxLength} value={value} placeholder={placeholder} onChange={this.handleInputChange} />
            </div>
        )
    }
}

Input.defaultProps = {
    type: "text",
    maxLength: 50,
    placeholder: "Take a Note"
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.number
};


export default Input;