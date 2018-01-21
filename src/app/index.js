import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Home } from "./components/Home.jsx";
import { User } from "./components/User.jsx";
import { Root } from "./components/Root.jsx";

class AppBase extends React.Component {

    render() {

        return (
            <div className="container">
                <BrowserRouter >
                    <div>
                        <Route exact path={"/"} component={Root} />
                        <Route path={"/user"} component={User} />
                        <Route path={"/home"} component={Home} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
    
}

render(<AppBase />, window.document.getElementById("app"));