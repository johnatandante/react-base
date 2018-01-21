import React from "react";
import PropTypes from "prop-types";

export class User extends React.Component {

    constructor(props) {
        super(props);
        let id = 0;
        if(props.args)
            id=props.args-id;

        this.state = {
            id: id
        };
    }

    onBackToHome() {
        // back to history
        
    }
    
    render() {
        
        return(
            <div>
                <div>
                    <h3>User Page</h3>
                    <p>User Id: { this.state.id} </p>
                    <hr />
                    <button onClick={() => this.onBackToHome()} className="btn btn-primary">Back To Home</button>
                </div>
            </div>
        );
        
    }
    
}

//npm install --save prop-types
User.propTypes = {
   
}

// Specifies the default values for props:
User.defaultProps = {
    
};
