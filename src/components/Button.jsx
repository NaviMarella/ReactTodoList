import React from "react";
import PropTypes from 'prop-types'
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

Button.defaultProps = {
    type: "button"
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired
};

export default Button;