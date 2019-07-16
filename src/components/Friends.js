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
        <h1>Stark, I don't feel so good</h1>
		</div>
		);
	}
}


export default FriendPage