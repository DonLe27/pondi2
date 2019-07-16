import React from 'react';
//import { Link } from 'react-router-dom';
//import { Button } from "react-bootstrap"
import '../styles/transitions.css';
import pic from '../Images/squirrel.png'

class ProfPic extends React.Component {
    constructor(props) {
        console.log(pic)
        super(props);
        this.avatar = this.props.avatar;
        this.pallette = "#aaccaa";
        this.classType = this.props.classType;
    }
    render() {
        return (
            <div className={this.classType} >
		    <img src={pic} style={{'backgroundColor' : this.pallette}}/>
        </div>
        );
    }
}

export default ProfPic