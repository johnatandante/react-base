import React from "react";

export class Home extends React.Component {
    
    render() {

        let name = "";
        if(!this.props.user) {
            name =  "In a new component!";
        } else {
            name = this.props.user.name;
        }

        let hobbies = [];
        if(this.props.user) {
            hobbies = this.props.user.hobbies;
            //for(let h of this.props.user.hobbies){
            //    hobbies = hobbies + h + " ";
            //}
            
        }

        return(
            <div>
                <p>Role: {this.props.name} - Level: {this.props.level}</p>
                <p>User: {name} </p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
        
    }
    
}

//npm install --save prop-types
//Home.propTypes = {
//    name : React.PropTypes.string,
//    level: React.PropTypes.number,
//    user: React.PropTypes.object
//}