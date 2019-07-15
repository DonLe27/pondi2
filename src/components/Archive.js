import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/transitions.css';
import '../styles/archive.css';
import PromptDisplay from './PromptDisplay.js'
import Categories from './Categories.js'
import HeaderBar from './HeaderBar.js'

class Archive extends React.Component{
	constructor(props){
		super(props);
		// parse data from parent to get prompts

		this.avatar=this.props.avatar;
		this.prompts = [];
		this.allprompts = this.props.prompts

		for (var i = 0; i < this.props.myposts.length; i++){
			var p = this.props.myposts[i];
			var question;
			for (var j = 0; j < this.props.prompts.length; j++){

				if(this.allprompts[j].id == this.props.myposts[i].prompt){
					question = this.props.prompts[j].question
				}
			}
			this.prompts.push(
					<PromptDisplay key={i} title={question} content={p["body"]} date={p["timestamp"]} avatar={this.avatar}/>
					);
		}
		console.log("Rendering archive")
	}
	componentWillReceiveProps(newProps)
	{
			if (newProps != this.props)
			{
				this.avatar=newProps.avatar;
				this.prompts = [];
				this.allprompts = newProps.prompts

				for (var i = 0; i < newProps.myposts.length; i++){
					var p = newProps.myposts[i];
					var question;
					for (var j = 0; j < newProps.prompts.length; j++){

						if(this.allprompts[j].id == newProps.myposts[i].prompt){
							question = newProps.prompts[j].question
						}
					}
					this.prompts.push(
							<PromptDisplay key={i} title={question} content={p["body"]} date={p["timestamp"]} avatar={this.avatar}/>
							);
			}
			console.log("Rendering archive again")
		}
	}

	

	render() {
		return (
		
		<div className="Archive">
		<HeaderBar header="Archive"/>
		<Categories />
		{this.prompts}
		</div>
		);
	}
}
export default Archive