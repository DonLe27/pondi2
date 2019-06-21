import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/transitions.css';
import '../styles/archive.css';
import PromptDisplay from './PromptDisplay.js'
import Categories from './Categories.js'

class Archive extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts
		console.log(this.props.myposts)
		this.avatar=this.props.avatar;
		this.prompts = [];
		this.allprompts = this.props.prompts
		console.log(this.allprompts)
		console.log(this.allprompts[0])
		for (var i = 0; i < this.props.myposts.length; i++){
			var p = this.props.myposts[i];
			var question;
			for (var j = 0; j < this.props.prompts.length; j++){

				if(this.allprompts[j].id == this.props.myposts[i].prompt){
					question = this.props.prompts[j].question
				}
			}
			this.prompts.push(
					<PromptDisplay title={question} content={p["body"]} date={p["timestamp"]} avatar={this.avatar}/>
					);
		}
		console.log("Rendering archive")
	}

	

	render() {
		return (
		
		<div className="Archive">
		<Categories />
		{this.prompts}
		</div>
		);
	}
}
export default Archive