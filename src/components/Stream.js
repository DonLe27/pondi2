import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import PromptDisplay from './PromptDisplay.js'
import FriendsBar from './FriendsBar.js'
import '../styles/transitions.css';
import '../styles/stream.css';


class Stream extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		this.avatar=this.props.userData["avatar"];
		this.prompts = [];
		for (var i = 0; i < this.props.streamData["prompts"].length; i++){
			var p = this.props.streamData["prompts"][i];
			this.prompts.push(
					<PromptDisplay title={p["title"]} content={p["content"]} date={p["date"]} avatar={p["avatar"]}/>
					);
		}


		
	}

	render() {
		return (
		
		<div className="Stream">
		<FriendsBar />
		{this.prompts}
		</div>
		);
	}
}


export default Stream