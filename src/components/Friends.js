import React from 'react';
import HeaderBar from './HeaderBar.js'
import FriendDisplay from './FriendDisplay'
import {auth}  from "../actions";
import { connect } from "react-redux";
class FriendPage extends React.Component{
	constructor(props){
		super(props);
		var friendDisplays = [];
		var closeFriendDisplays = [];
		var pendingFriendDisplays = [];
		for(var i = 0; i < props.friends.length; i++)
		{
			friendDisplays.push(
				<FriendDisplay key={this.props.friends[i]["username"] + ' f'} username={this.props.friends[i]["username"]} avatar={this.props.friends[i]["avatar"]}/>
			)
		}
		for(var i = 0; i < props.closeFriends.length; i++)
		{
			closeFriendDisplays.push(
				<FriendDisplay key={this.props.closeFriends[i]["username"] + ' c'} username={this.props.closeFriends[i]["username"]} avatar={this.props.closeFriends[i]["avatar"]}/>
			)
		}
		for(var i = 0; i < props.pendingFriends.length; i++)
		{
			pendingFriendDisplays.push(
				<FriendDisplay key={this.props.pendingFriends[i]["username"] + ' p'} acceptFriend={this.acceptFriendHandler.bind(this)} username={this.props.pendingFriends[i]["username"]} avatar={this.props.pendingFriends[i]["avatar"]}/>
			)
		}
		this.state = {
			friendDisplays : friendDisplays,
			closeFriendDisplays : closeFriendDisplays,
			pendingFriendDisplays : pendingFriendDisplays
		}
		console.log("Rendering friends")
	}
	acceptFriendHandler = (friendname) => {
		this.props.acceptFriend(friendname)
		this.props.getMyFriends();
	}
	componentWillReceiveProps(newProps)
	{
		if (newProps.friends != this.props.friends){
			var newFriendDisplays = []
			for(var i = 0; i < newProps.friends.length; i++)
			{
				newFriendDisplays.push(
					<FriendDisplay key={newProps.friends[i]["username"] + ' c'} username={newProps.friends[i]["username"]} avatar={newProps.friends[i]["avatar"]}/>
				)
			}
			this.setState({
				friendDisplays: newFriendDisplays
			})
			console.log("RECEIVED NEW FRIENDS" )
			console.log(newProps.friends)
		}
		if (newProps.pendingFriends != this.props.pendingFriends){
			var newPendingFriendDisplays = []
			for(var i = 0; i < newProps.pendingFriends.length; i++)
			{
				newPendingFriendDisplays.push(
					<FriendDisplay key={newProps.pendingFriends[i]["username"] + ' c'} acceptFriend={this.acceptFriendHandler.bind(this)} username={newProps.pendingFriends[i]["username"]} avatar={newProps.pendingFriends[i]["avatar"]}/>
				)
			}
			this.setState({
				pendingFriendDisplays: newPendingFriendDisplays
			})
			console.log("RECEIVED NEW PENDING FRIENDS")
			console.log(newProps.pendingFriends)
		}	
		if (newProps.closeFriends != this.props.closeFriends){
			var newCloseFriendDisplays = []
			for(var i = 0; i < newProps.closeFriends.length; i++)
			{
				newCloseFriendDisplays.push(
					<FriendDisplay key={newProps.closeFriends[i]["username"] + ' c'} username={newProps.closeFriends[i]["username"]} avatar={newProps.closeFriends[i]["avatar"]}/>
				)
			}
			this.setState({
				closeFriendDisplays: newCloseFriendDisplays
			})
			console.log("RECEIVED NEW CLOSE FRIENDS")
			console.log(newProps.closeFriends)
		}	
		
	}
	
	render() {
		return (
		
		<div >
			<h1 align="center" >friends</h1>
		{this.state.friendDisplays}
		<h1 align="center" >close friends</h1>
		{this.state.closeFriendDisplays}
		<h1 align="center" >pending friends</h1>
		{this.state.pendingFriendDisplays}

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
