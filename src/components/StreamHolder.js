import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logout from './Logout.js';
import { connect } from "react-redux";
import {auth} from "../actions";

import '../styles/transitions.css';
import '../styles/streamholder.css';

import { Motion, spring } from "react-motion";

import Stream from './Stream.js';
import Ocean from './Ocean.js';
import Archive from './Archive.js';
import SideBar from './SideBar.js';
import Prompt from './Prompt.js';
import FriendPage from './Friends.js';
import FriendProfile from './FriendProfile';

class StreamHolder extends React.Component {
    constructor(props) {
        super(props);
        // parse through data, get username, etc
        

        this.state = {
            username: '',
            avatar: '',
            color: '',
            id: -1,
            archivePosts: [],
            streamPosts: [],
            friendProfilePosts: [],
            stream: false,
            archive: true,
            friend:false,
            ocean: false,
            prompt: false,
            friendProfile: false,
            profileName: '',
            prompts: [],
            myprofile: [],
            leftSide: <SideBar 
                userData={this.userData}
                addStream={this.addStream.bind(this)} 
                addarchive={this.addarchive.bind(this)}
                addOcean={this.addOcean.bind(this)}
                addPrompt={this.addPrompt.bind(this)}
                addFriend={this.addFriends.bind(this)}
            />,
            myposts: [],
            oceanPosts: [],
            friendPosts: [],
            friends: [],
            closeFriends: [],
            pendingFriends: [],



        };
        this.handleAdd = this.handleAdd.bind(this);
        this.addStream = this.addStream.bind(this);
        this.addOcean = this.addOcean.bind(this);
        this.addarchive = this.addarchive.bind(this);
        this.addFriends = this.addFriends.bind(this);
    }

    handleAdd(i) {}
    addFriends(i) {
        this.setState({ archive: false, stream: false, ocean: false, prompt: false, friend: true, friendProfile: false });
    }
    addStream(i) {
        this.setState({ archive: false, stream: true, ocean: false, prompt: false, friend: false, friendProfile: false });
    }

    addOcean(i) {
        this.setState({ archive: false, stream: false, ocean: true, prompt: false, friend: false, friendProfile: false});
    }

    addarchive(i) {
        this.setState({ archive: true, stream: false, ocean: false, prompt: false,friend: false, friendProfile: false });
        console.log(this.addarchive)
    }

    addPrompt(i) {
        this.setState({ archive: false, stream: false, ocean: false, prompt: true,friend: false, friendProfile: false });  
    }
    addFriendProfile(friendName) {
        this.setState({ archive: false, stream: false, ocean: false, prompt: false,friend: false, friendProfile: true, profileName : friendName});
        console.log("PROFILE " + friendName)
        document.body.style.margin = "0";
        //document.body.style.overflow = "hidden";
        let token = this.props.token;
        console.log("TOKEN:", token);
        let headers = {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          //  'Access-Control-Allow-Origin': '*'
        };
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
                ///////Get post information
                setTimeout(() => {
                    fetch("https://backpondi.herokuapp.com/api/auth/friendprofile/?friendname=" + friendName,  {headers, method: "GET"})
                    .then(res => {
                        console.log('PROFILE_RESPONSE:', res);
                        if (res.status < 500) {
                            return res.json().then(data => {
                                console.log('Friend Profile Posts: ', data);
                                this.setState({
                                    friendProfilePosts: data,
                                })
                                console.log(this.state.profileName)
                            })
        
                            
                        } else {
                            console.log("Server Error!");
                            throw res;
                        }
                    })
                }, 500);
    }
    getMyFriends(){
        document.body.style.margin = "0";
        //document.body.style.overflow = "hidden";
        let token = this.props.token;
        console.log("TOKEN:", token);
        let headers = {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          //  'Access-Control-Allow-Origin': '*'
        };
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/allfriends',  {headers, method: "GET"})
            .then(res => {
                console.log('FRIEND_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        var allFriends = JSON.parse(data)
                        console.log(allFriends)
                        console.log("FRIENDS", allFriends["friends"])
                        console.log("CLOSE FRIENDS", allFriends["closefriends"])
                        console.log("PENDING FRIENDS", allFriends["pendingfriends"])
                        this.setState({
                            friends: allFriends["friends"],
                            closeFriends: allFriends["closefriends"],
                            pendingFriends: allFriends["pendingfriends"]
                        })
                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
    }
    getMyPosts(){
        document.body.style.margin = "0";
        //document.body.style.overflow = "hidden";
        let token = this.props.token;
        console.log("TOKEN:", token);
        let headers = {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          //  'Access-Control-Allow-Origin': '*'
        };
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
                ///////Get post information
                setTimeout(() => {
                    fetch('https://backpondi.herokuapp.com/api/auth/myposts/',  {headers, method: "GET"})
                    .then(res => {
                        console.log('PROFILE_RESPONSE:', res);
                        if (res.status < 500) {
                            return res.json().then(data => {
                                console.log('POSTS:', data);
                                this.setState({
                                    myposts: data
                                })
        
                            })
        
                            
                        } else {
                            console.log("Server Error!");
                            throw res;
                        }
                    })
                }, 500);
    }

    componentDidMount() {
        document.body.style.margin = "0";
        //document.body.style.overflow = "hidden";
        let token = this.props.token;
      //  console.log("TOKEN:", token);
        let headers = {
            "Content-Type": "application/json",
            'Accept': 'application/json',
          //  'Access-Control-Allow-Origin': '*'
        };
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/profile/',  {headers, method: "GET"})
            .then(res => {
             //   console.log('PROFILE_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                 //       console.log('DATA:', data);
                        this.setState({
                            leftSide: <SideBar 
                            username={data.user.username}
                            avatar={data.animal}
                            addStream={this.addStream.bind(this)} 
                            addarchive={this.addarchive.bind(this)}
                            addOcean={this.addOcean.bind(this)}
                            addPrompt={this.addPrompt.bind(this)}
                            addFriends={this.addFriends.bind(this)}
                        />,
                            username : data.user.username,
                            avatar : data.animal,
                            color : data.color,
                            id: data.user.id, 
                            
                            
                         });

                    })
                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);

        ///////Get post information
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/myposts/',  {headers, method: "GET"})
            .then(res => {
                console.log('PROFILE_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        console.log('MY POSTS:', data);
                        this.setState({
                            myposts: data
                        })

                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);

        //////Get Profile
                setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/profile/',  {headers, method: "GET"})
            .then(res => {
                console.log('PROFILE_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        console.log('MY PROFILE:', data);
                        this.setState({
                            myprofile: data
                        })

                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
        /////////////////Get prompts
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/allprompts/',  {headers, method: "GET"})
            .then(res => {
                console.log('PROFILE_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        console.log('POSTS:', data);
                        this.setState({
                            prompts: data
                        })

                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
                ///////Get post information
        /////////////////Get friends
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/allfriends',  {headers, method: "GET"})
            .then(res => {
                console.log('PROFILE_RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        var allFriends = JSON.parse(data)
                        console.log(allFriends)
                        console.log("FRIENDS", allFriends["friends"])
                        console.log("CLOSE FRIENDS", allFriends["closefriends"])
                        console.log("PENDING FRIENDS", allFriends["pendingfriends"])
                        this.setState({
                            friends: allFriends["friends"],
                            closeFriends: allFriends["closefriends"],
                            pendingFriends: allFriends["pendingfriends"]
                        })
                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
        /////////////////Get ocean posts
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/oceanposts/',  {headers, method: "GET"})
            .then(res => {
              
                if (res.status < 500) {
                    return res.json().then(data => {
                     
                        this.setState({
                            oceanPosts: data
                        })
                      
                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
        
        /////////////////Get friend posts
        setTimeout(() => {
            fetch('https://backpondi.herokuapp.com/api/auth/friendposts/',  {headers, method: "GET"})
            .then(res => {
            //    console.log('FRIEND RESPONSE:', res);
                if (res.status < 500) {
                    return res.json().then(data => {
                        console.log('FRIENDPOSTS:', data);
                        this.setState({
                            friendPosts: data
                        })
                   //     console.log(this.state.friendPosts)
                    })

                    
                } else {
                    console.log("Server Error!");
                    throw res;
                }
            })
        }, 500);
        //fetch('https://backpondi.herokuapp.com/api/auth/profile/',  {headers, method: "GET"})

    }

    componentWillUnmount() {
        //document.body.style.overflow = "hidden";
        
    }


    render() {
        // if (!this.props.isAuthenticated) {
        //   return <Redirect to="/" />
        // }

        const { ...props } = this.props;
        console.log("FRIEND PAGE STATUS " + this.state.friend)
        return (
            //this.state.loading ? this.props.loadUser() :
            <div>

            <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(1 , {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
                {this.state.leftSide}
               </div>
                )}
        </Motion>


        <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.stream ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.stream && <Stream  key={1} prompts={this.state.prompts} friendPosts={this.state.friendPosts}/>}
               </div>
                )}
        </Motion>

         <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.ocean ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.ocean && <Ocean key={2} prompts={this.state.prompts} oceanPosts={this.state.oceanPosts}/>}
                          </div>

                )}
        </Motion>

         <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.archive ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.archive &&  <Archive key={3} prompts={this.state.prompts} myposts={this.state.myposts} avatar={this.state.avatar} />}          
                             </div>

               )}
        </Motion>

        <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.prompt ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.prompt && <Prompt key={4} prompts={this.state.prompts} myposts={this.state.myposts} id={this.state.id} getMyPosts={this.getMyPosts.bind(this)}/>}
                          </div>

                )}
        </Motion>
        
        <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.friend ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.friend && <FriendPage key={5} prompts={this.state.prompts} getFriendProfile={this.addFriendProfile.bind(this)} friendPosts={this.state.friendPosts} getMyFriends={this.getMyFriends.bind(this)} friends={this.state.friends} closeFriends={this.state.closeFriends} pendingFriends={this.state.pendingFriends}/>}
                          </div>

                )}
      
        </Motion>
                 <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.friendProfile ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {  this.state.friendProfile &&  <FriendProfile key={6} prompts={this.state.prompts} friendName={this.state.profileName} friendProfilePosts={this.state.friendProfilePosts} avatar={this.state.avatar} />}          
                             </div>

               )}
        </Motion>

         
       



       < Logout className="Logout-button"/> 
      </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        token: state.auth.token
    };
}

const mapDispatchToProps = dispatch => {
    return {
        loadUser: () => dispatch(auth.loadUser()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamHolder);