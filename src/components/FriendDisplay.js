import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/frienddisplay.css';
import ProfPic from './ProfPic.js'
import { Button } from "react-bootstrap";
class FriendDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		
	}

	render(){
		return(
			<div className ="friend">
			<Button className="prompt_title" onClick={(i) => {this.props.deleteFriend(this.props.username)}}>{this.props.username}</Button>
			</div>
		);
	}
}
	

export default FriendDisplay