import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pendingfrienddisplay.css';
import ProfPic from './ProfPic.js'
import { Button } from "react-bootstrap";
class PendingFriendDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		
	}

	render(){
		return(
			<div className ="friend">
			<Button className="prompt_title" onClick={(i) => {this.props.acceptFriend(this.props.username)}}>{this.props.username}</Button>
			</div>
		);
	}
}
	

export default PendingFriendDisplay