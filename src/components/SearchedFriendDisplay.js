import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/searchedfrienddisplay.css';
import ProfPic from './ProfPic.js'
import { Button } from "react-bootstrap";
class SearchedFriendDisplay extends React.Component {

	constructor(props)
	{
		super(props);
		
	}

	render(){
		return(
			<div className ="friend">
				<Button className="prompt_title" onClick={(i) => {this.props.requestFriend(this.props.username)}}>{this.props.username}</Button>
			</div>
		);
	}
}
	

export default SearchedFriendDisplay