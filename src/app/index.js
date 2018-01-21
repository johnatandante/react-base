import React from "react";
import { render } from "react-dom";
//import { Router, Route } from "react-router";

import { Home } from "./components/Home.jsx";
import { Root } from "./components/Root.jsx";

class AppBase extends React.Component {

    render() {

        return (
            <div className="container">
                <Root>
                    <Home > </Home>
                </Root>
            </div>
        );
    }
    
}

render(<AppBase />, window.document.getElementById("app"));