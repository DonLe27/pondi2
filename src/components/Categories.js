import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/categories.css';


class Categories extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			categories : [ "#CATEGORY", "#CATEGORY", "#CATEGORY", "#CATEGORY", ],
		}
		
	}

	render(){
		return (
		<div className="category-holder">
		{		
			this.state.categories.map((item,i) =><div className="category">{item}</div>)	
		}	
		</div>	
);
	}
}

export default Categories