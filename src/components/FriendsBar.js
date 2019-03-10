import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/friends.css';


class FriendsBar extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			categories : [ "FRIENDS", "CLOSE FRIENDS"],
		}
		
	}

	render(){
		return (
		<div className="friend-holder">
		{		
			this.state.categories.map((item,i) =><div className="friend">{item}</div>)	
		}	
		</div>	
);
	}
}

export default FriendsBar