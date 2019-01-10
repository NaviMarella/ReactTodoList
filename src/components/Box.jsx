import React from "react";
import "./Box.css";

const Box = ({children, type, ...otherProps}) => {
    const styles = [
        'box_container',
        type === "large" ? "box_large_one": ""
    ].join(" ");
    return (
        <div className={styles} {...otherProps}>
            {children}
        </div>
    )
}

export default Box;