import React from "react";
import "./Button.css";

const Button = ({type, text, children, handleButtonClick}) => {

    function handleClick(e) {
       e.preventDefault();
       handleButtonClick();
    }

    return (
        <button type={type} className='btn btn-large btn-success' onClick={handleClick}>
            {children}
            {text}
        </button>
    )
}

export default Button;