import React from "react";
import PropTypes from 'prop-types';
import "./label.css";
import Conditional from "./Conditional";

const Label = ({text, children, hideText, crossText, ...otherProps}) => {
    var styles = [
        "label_text",
        (crossText) ? "label_crossed" : ""
    ].join(" ");

    return(
        <div className="label" {...otherProps}>
            {children}
            <Conditional condition={!hideText}>
                <span className={styles}>{text}</span>
            </Conditional>
        </div>
    )
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
    hideText: PropTypes.bool,
    crossText: PropTypes.bool
};


export default Label