import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";

class AppBase extends React.Component {
    constructor() {
        super();
        this.users = [
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
    }

    onPeekUserList() {
        console.log("onPeekUserList");
        this.users.forEach((item) => console.log(item));
    };

    render() {
        let users = this.users;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header text="Home" />        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { users.map( (u, index) => <Home key={index} initialLevel={u.level} name={u.name} peekUserList={() => this.onPeekUserList()} /> )}
                    </div>
                </div>
            </div>
        );
    }
    
}

render(<AppBase />, window.document.getElementById("app"));