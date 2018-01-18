import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./components/Home.jsx";

class AppBase extends React.Component {
    render() {
        let users = [
            {
            name: "Anna",
            hobbies: ["Soccer", "Hiking"]
            },
            {
                name: "Max",
                hobbies: ["Milf"]
            },
            {
                name: "Dante",
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
                        <Home >
                            <div><p>Using children</p></div>
                        </Home>
                        <Home name={"Primo"} level={0} user = {users[0]} />
                        <Home name={"Secondo"} level={2} user = {users[1]} />
                        <Home name={"Terzo"} level={7} user = {users[2]} />
                    </div>
                </div>
            </div>
        );
    }
    
}

render(<AppBase />, window.document.getElementById("app"));