import React from 'react';
import HeaderBar from './HeaderBar.js'


class FriendPage extends React.Component{
	constructor(props){
		super(props);

		console.log("Rendering friends")
	}

	render() {
		return (
		
		<div className="Friendpage">
		<HeaderBar header="You have no friends..."/>
		{this.props.friends[0]["username"]}
		</div>
		);
	}
}


export default FriendPage