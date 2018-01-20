import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    
    constructor(props) {
        super();
        this.state = {
            level: props.initialLevel,
            name: props.name,
            peekUserList: props.peekUserList,
            homeLink: props.homeLink
        };
    }

    onLevelUp() {
        this.setState({
            level: this.state.level +1

        });
        
    }

    onChangeName() {
        //
        this.props.changeLink(this.state.homeLink);
    }

    render() {
        return(
            <div>
                <p>User: {this.state.name} - Level: {this.state.level}</p>
                <hr />
                <button onClick={() => this.onLevelUp()} className="btn btn-primary">Level me up!</button>
                <hr />
                <button onClick={this.state.peekUserList} className="btn btn-primary" >Take a peek</button>
                <hr />
                <button onClick={this.onChangeName.bind(this) } className="btn btn-primary">Change Header Link</button>
            </div>
        );
        
    }
    
}

//npm install --save prop-types
Home.propTypes = {
    initialLevel: PropTypes.number,
    name: PropTypes.string,
    peekUserList: PropTypes.func,
    homeLink: PropTypes.string

}

// Specifies the default values for props:
Home.defaultProps = {
    name: 'My Nobody',
    initialLevel: 0,
    peekUserList: () => { },
    homeLink: "Link to change"
  };
