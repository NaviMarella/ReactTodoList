import PropTypes from 'prop-types';
import React from "react";
import hamburgerIcon from "../icons/hamburger.svg";
import todoIcon from "../icons/todo.svg";
import "./Header.css";

const Header = ({showOrHideSidebar}) => {

    return (
        <header className="header">
            <img alt="" onClick={() => showOrHideSidebar()} className={["header_logo", "hamLogo"].join(" ")} src={hamburgerIcon}></img>
            <div className="header_title_container">
                <img alt="" className="header_logo" src={todoIcon}></img>
                <h1>Todoist</h1>
            </div>
        </header>
    )
}

Header.propTypes = {
    showOrHideSidebar: PropTypes.func.isRequired
};

export default Header;