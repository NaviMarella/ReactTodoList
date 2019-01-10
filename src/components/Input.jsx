import React, { Component } from "react";
import "./Input.css";

class Input extends Component{
    handleInputChange = (e) => {
        const { handleInput } = this.props;
        handleInput(e.target.value);
    }

    render(){
        const {
            type = "text",
            value,
            maxLength = "50",
            placeholder = "Take a Note...",
        } = this.props;

        return (
            <div className="input_container">
                <input type={type} maxLength={maxLength} value={value} placeholder={placeholder} onChange={this.handleInputChange} />
            </div>
        )
    }
}

export default Input;