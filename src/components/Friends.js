import React from 'react';
import HeaderBar from './HeaderBar.js'
import FriendDisplay from './FriendDisplay'
import { auth } from "../actions";
import { connect } from "react-redux";
class FriendPage extends React.Component{
	constructor(props){
		super(props);
		this.friendDisplays = []
		this.closeFriendDisplays = []
		this.pendingFriendDisplays = []
		for(var i = 0; i < props.friends.length; i++)
		{
			this.friendDisplays.push(
				<FriendDisplay key={i} username={this.props.friends[i]["username"]} avatar={this.props.friends[i]["avatar"]}/>
			)
		}
		for(var i = 0; i < props.closeFriends.length; i++)
		{
			this.closeFriendDisplays.push(
				<FriendDisplay key={i} username={this.props.closeFriends[i]["username"]} avatar={this.props.closeFriends[i]["avatar"]}/>
			)
		}
		for(var i = 0; i < props.pendingFriends.length; i++)
		{
			this.pendingFriendDisplays.push(
				<FriendDisplay key={i} acceptFriend={this.props.acceptFriend.bind(this)} username={this.props.pendingFriends[i]["username"]} avatar={this.props.pendingFriends[i]["avatar"]}/>
			)
		}
		console.log("Rendering friends")
		console.log(this.friendDisplays)
	}
	acceptFriend = (friendName) => {
		this.props.acceptFriend(friendName)
	  };
	render() {
		return (
		
		<div >
			<h1 align="center" >friends</h1>
		{this.friendDisplays}
		<h1 align="center" >close friends</h1>
		{this.closeFriendDisplays}
		<h1 align="center" >pending friends</h1>
		{this.pendingFriendDisplays}

		</div>
		);
	}
}
const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return { field, message: state.auth.errors[field] };
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token

    };
}
const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(auth.loadUser()),
        acceptFriend: (friendName) => 
            dispatch(auth.acceptFriend(friendName)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendPage);
