import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";
import { Root } from "./components/Root.jsx";

class AppBase extends React.Component {
    constructor() {
        super();
        this.state = {
            
        };

        let users = [
            {
                name: "Anna",
                level: 27,
                hobbies: ["Soccer", "Hiking"]
            },
            {
                name: "Air Max",
                level: 17,
                hobbies: ["Milf"]
            },
            {
                name: "Dante",
                level: 36,
                hobbies: ["Computing", "Cards"]
            },
            {
                level: 36,
                hobbies: ["Computing", "Cards"]
            },
            {
                name: "No level named",
                hobbies: ["Computing", "Cards"]
            }
        ];

        this.state.users = users;
    }

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