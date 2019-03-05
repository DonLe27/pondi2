import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import '../styles/transitions.css';
import '../styles/ocean.css';



class Ocean extends React.Component {
	

	render() {
		return (	
			<div className="Ocean">This is an Ocean</div>
		);
	}	
} 

export default Ocean