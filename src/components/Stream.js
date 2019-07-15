import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Alert } from "react-bootstrap";
import PromptDisplay from './PromptDisplay.js'
import HeaderBar from './HeaderBar.js'
import Categories from './Categories.js'
import '../styles/transitions.css';
import '../styles/stream.css';


class Stream extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		console.log(this.props.friendPosts)
		this.avatar=this.props.avatar;
		this.prompts = [];
		this.allprompts = this.props.prompts
		console.log(this.allprompts)
		console.log(this.allprompts[0])
		for (var i = 0; i < this.props.friendPosts.length; i++){
			var p = this.props.friendPosts[i];
			var question;
			for (var j = 0; j < this.props.prompts.length; j++){

				if(this.allprompts[j].id == this.props.friendPosts[i].prompt){
					question = this.props.prompts[j].question
				}
			}
			this.prompts.push(
					<PromptDisplay key={i} title={question} content={p["body"]} date={p["timestamp"]} avatar={this.avatar}/>
					);
		}
		console.log("Rendering friends")
	}

	render() {
		return (
		
		<div className="Stream">
		<HeaderBar header="Friends"/>
		<Categories />
		{this.prompts}
		</div>
		);
	}
}


export default Stream