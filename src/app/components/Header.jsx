import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
        return (
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <div className="container collapse navbar-collapse">
                    <div className="navbar-header">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.text}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};

React.propTypes = {
    text: PropTypes.string
}