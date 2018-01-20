import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";

class AppBase extends React.Component {
    render() {
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
            }
        ];

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />        
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { users.map( (u, index) => <Home key={index} initialLevel={u.level} name={u.name} /> )}
                    </div>
                </div>
            </div>
        );
    }
    
}

render(<AppBase />, window.document.getElementById("app"));