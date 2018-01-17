import React from "react";

export class Home extends React.Component {
    
    render() {
        let name = "Dante"
        if(!name) {
            name =  "In a new component!";
        }

        console.log(this.props);

        console.log(this.props.user.hobbies);
        let hobbies = "";
        for(let h of this.props.user.hobbies){
            hobbies = hobbies + h + " ";
        }

        return(
            <div>
                <p>Role: {this.props.name} - Level: {this.props.level}</p>
                <p>User: {this.props.user.name} - {hobbies.trim()}</p>
            </div>
        );
        
    }
    
}