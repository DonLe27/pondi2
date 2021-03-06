//This page will render the chosen prompt and allow it to be edited
//Need to pass down prompt ID 
//Make a new menu that does that passing down
//for now put in random ID
import React from "react";
import { Link } from "react-router-dom";
import {  Button } from "react-bootstrap";
import "../styles/prompt.css";

import { connect } from "react-redux";
import { auth } from "../actions";
class Prompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imagefile: null,
      body: "",
      theme: "love",
      privacy: "p",
      prompt: this.props.prompts[this.props.prompts.length-1].question,
      promptId: this.props.prompts.length,
      myposts: this.props.myposts,
    };
  }
  componentWillReceiveProps(newProps)
	{
			if (newProps.myposts != this.props.myposts || newProps.prompts != this.props.prompts){
				this.setState({
          myposts: newProps.myposts
        })
        console.log("Rendering archive again")
      }
	}
  promptChangeHandler = (newPrompt) => {
    console.log(newPrompt);
    var exist = false;
    let postIndex = -1;
    var i;
    for (i = 0; i < this.state.myposts.length; i++) 
    {
      if (this.state.myposts[i].prompt == newPrompt)
      //If the user already had a post written for that prompt
      {//Don't break and get the last one
        console.log("Exists")
        postIndex = i
        exist = true;
      }
    }
    //LOOKS LIKE THE UPDATES DONT UPDATE THE STATE--SEE HOW ARCHIVE STATE GETS UPDATED
    if (exist)
    {
      this.setState({
        body: this.state.myposts[postIndex].body,
        theme: this.state.myposts[postIndex].theme,
        privacy: this.state.myposts[postIndex].privacy,
        prompt: this.props.prompts[newPrompt-1].question,
        promptId: newPrompt,
      });
    }
    else
    {
      this.setState({
        body: "",
        theme: "",
        privacy: "p",
        promptId: newPrompt,
        prompt: this.props.prompts[newPrompt-1].question
      });
    }
  }
  fileChangedHandler = event => {
    this.setState({ imagefile: event.target.files[0] });
  };

  textInputHandler = event => {
    this.setState({ body: event.target.value });
    console.log(this.state.body)
  };

  uploadHandler = () => {
    var i;
    var postId;
    let exist = false
    for (i = 0; i < this.props.myposts.length; i++)
    {
      if (this.props.myposts[i].prompt == this.state.promptId)
      {
        exist = true;
        postId = this.props.myposts[i].id;
        console.log(postId);
      }
    }
    if (exist)
    {
      console.log(this.state.body);
      console.log(this.props.postUpdate(postId, this.state.body, this.props.id, this.state.theme, this.state.privacy));
      this.props.getMyPosts();
    }
    else
    {
    console.log(this.state.body);
    console.log(this.props.post(this.state.promptId, this.state.body, this.props.id, this.state.theme, this.state.privacy));
    this.props.getMyPosts();
    
    }
  };
  privacyHandler = (privacy) => {
    if (this.state.privacy == "p"){
      this.setState({
        privacy: "c"
      })
    }
    if (this.state.privacy == "c"){
      this.setState({
        privacy: "f"
      })
    }
    if (this.state.privacy == "f"){
      this.setState({
        privacy: "o"
      })
    }
    if (this.state.privacy == "o"){
      this.setState({
        privacy: "p"
      })
    }
  }


  componentDidMount() {
    var exist = false;
    let postIndex = -1;
    var i;
    for (i = 0; i < this.state.myposts.length; i++) 
    {
      if (this.state.myposts[i].prompt == this.state.promptId)
      //If the user already had a post written for that prompt
      {//Don't break and get the last one
        console.log("Exists")
        postIndex = i
        exist = true;
      }
    }
    if (exist)
    {
      this.setState({
        body: this.state.myposts[postIndex].body,
        theme: this.state.myposts[postIndex].theme,
        privacy: this.state.myposts[postIndex].privacy,
        prompt: this.props.prompts[this.state.promptId-1].question
      });
    }
  }

  /*
  componentDidUpdate(){
    //console.log(this.props.myposts)
  }
  */


  render() {
    //Make buttons for changing prompts
    const buttonList = [];
    var i;
    for(i = 0; i<this.props.prompts.length; i++)
    {

      let item = this.props.prompts[i].question
      let index = i + 1
      buttonList.push(<Button onClick={(i)=> {this.promptChangeHandler(index)}}key={i} className="category">{item}</Button>)

    }
    return (
      <div>
        <div className="Prompt">{this.state.prompt}</div>
        <input
          type="image"
          className="Refresh"
          src="http://www.stickpng.com/assets/images/585e4831cb11b227491c338e.png"
        />
        <input
          type="image"
          className="Edit"
          src="https://www.pngkey.com/png/full/0-5198_edit-pencil-png-pencil-edit-logo.png"
        />
        <div className="Container">
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.textInputHandler}
            placeholder="Type your response here"
          />
          <input
            type="file"
            id="file"git 
            className="inputfile"
            accept="image/*"
            onChange={this.fileChangedHandler}
          />
          <label for="file" className="Upload">
            <img src="https://images.vexels.com/media/users/3/153834/isolated/preview/d0679e2704e98a8041508fba4c332d49-paper-clip-stroke-icon-by-vexels.png" />
          </label>
          <input
            type="image"
            className="Visibility"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/768px-Globe_icon.svg.png"
          />
        <div>
        {this.state.privacy == "p" && <Button onClick={()=> {this.privacyHandler()}}>Private</Button>}
        {this.state.privacy == "c" && <Button onClick={()=> {this.privacyHandler()}}>Close Friends</Button>}
        {this.state.privacy == "f" && <Button onClick={()=> {this.privacyHandler()}}>Friends</Button>}
        {this.state.privacy == "o" && <Button onClick={()=> {this.privacyHandler()}}>Ocean</Button>}
        </div>
          <div>
            {buttonList}
          </div>
        </div>
        
        <Button className="Post" onClick={this.uploadHandler}>
          Save
        </Button>
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
        post: (prompt, body, profile, theme, privacy) => 
            dispatch(auth.post(prompt, body, profile, theme, privacy)),
        postUpdate: (postId, body, profile, theme, privacy) => 
            dispatch(auth.postUpdate(postId, body, profile, theme, privacy)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);