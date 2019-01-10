import React from "react";
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

export default Label