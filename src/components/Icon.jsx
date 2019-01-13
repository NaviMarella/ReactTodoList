import React from "react";
import PropTypes from 'prop-types';
import Box from "./Box";
import "./Icon.css";
import workIcon from "../icons/work.svg";
import todoIcon from "../icons/todo-list.svg";
import basketIcon from "../icons/basket.svg";

export const getIconByName = name => {
  switch(name) {
    case "Work":
      return workIcon;
    case "TODOS":
      return todoIcon;
    case "Groceries":
      return basketIcon;
    default:
      return workIcon;
  }
}

const Icon = ({icon, iconName, altText, ...otherProps}) => {
  let iconSrc = icon ? icon : getIconByName(iconName);
    return (
        <Box className="icon_container" {...otherProps}>
           <img alt={altText} src={ iconSrc }></img>
        </Box>
    )
}

Icon.defaultProps = {
  altText: ""
}

Icon.propTypes = {
  icon: PropTypes.node,
  iconName: PropTypes.string,
  altText: PropTypes.string
};

export default Icon;