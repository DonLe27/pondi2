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
		this.avatar=this.props.userData["avatar"];
		this.prompts = [];
		for (var i = 0; i < this.props.userData["prompts"].length; i++){
			var p = this.props.userData["prompts"][i];
			this.prompts.push(
					<PromptDisplay title={p["title"]} content={p["content"]} date={p["date"]} avatar={p["avatar"]}/>
					);
		}
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