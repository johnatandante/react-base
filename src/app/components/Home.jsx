import React from "react";

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            level: props.initialLevel,
            name: props.name
        };
    }

    onLevelUp() {
        this.setState({
            level: this.state.level +1

        });
        
    }

    render() {
        return(
            <div>
                <p>User: {this.state.name} - Level: {this.state.level}</p>
                <hr />
                <button onClick={() => this.onLevelUp()} className="btn btn-primary">Level me up!</button>
            </div>
        );
        
    }
    
}

//npm install --save prop-types
