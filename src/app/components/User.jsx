import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {

    onBackToHome() {
        // back to history
        
    }
    
    render() {
        
        return(
            <div>
                <div>
                    <h3>User Page</h3>
                    <p>User Id: {this.props.args.id}</p>
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
