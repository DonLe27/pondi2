import React from 'react';
//import { Link } from 'react-router-dom';
//import { CSSTransitionGroup } from 'react-transition-group'; // ES6
//import { Button } from "react-bootstrap"
import '../styles/transitions.css';

class ProfPic extends React.Component {
    constructor(props) {
        super(props);
        this.avatar = this.props.avatar;
        this.pallette = "#aaccaa";
        this.classType = this.props.classType;
    }
    render() {
        return (
            <div className={this.classType} >
		    <img src={process.env.PUBLIC_URL + this.avatar + ".png"} style={{'background-color' : this.pallette}}/>
        </div>
        );
    }
}

export default ProfPic