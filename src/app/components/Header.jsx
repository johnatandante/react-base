import React from "react";
import PropTypes from "prop-types";

export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container collapse navbar-collapse">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav mr-auto">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/user">User</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};

React.propTypes = {
    text: PropTypes.string
}