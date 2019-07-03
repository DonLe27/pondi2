//This page will render the chosen prompt and allow it to be edited
//Need to pass down prompt ID 
//Make a new menu that does that passing down
//for now put in random ID
import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "../styles/prompt.css";

import { connect } from "react-redux";
import { auth } from "../actions";

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.prompts)
    this.state = {
      imagefile: null,
      body: "",
      theme: "love",
      privacy: "p",
      prompt: this.props.prompts[this.props.prompts.length-1].question,
      promptId: this.props.prompts.length, //Initialize to last prompt,
      myposts: this.props.myposts,
      postId: null
    };
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
        break;
      }
    }
    if (false)
    {
      console.log(this.state.body);
      console.log(this.props.postUpdate(postId, this.state.body, this.props.id, this.state.theme, this.state.privacy));
    }
    else
    {
    console.log(this.state.body);
    console.log(this.props.post(this.state.promptId, this.state.body, this.props.id, this.state.theme, this.state.privacy));
    
    }
  };



  componentDidMount() {
    var exist = false;
    let postIndex = -1;
    var i;
    for (i = 0; i < this.state.myposts.length; i++) 
    {
      if (this.state.myposts[i].prompt == this.state.promptId)
      //If the user already had a post written for that prompt
      {
        console.log("Exists")
        postIndex = i
        exist = true;
        break;
      }
    }
    if (exist)
    {
      this.setState({
        body: this.state.myposts[postIndex].body,
        theme: this.state.myposts[postIndex].theme,
        privacy: this.state.myposts[postIndex].privacy,
        postId: this.state.myposts[postIndex].id
      });
    }
  }
  componentDidUpdate(){
    console.log(this.props.myposts)
  }


  render() {
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
          <Button className="Categories">#CATEGORIES</Button>
        </div>

        <Button className="Post" onClick={this.uploadHandler}>
          Post
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