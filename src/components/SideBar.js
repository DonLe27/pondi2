import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/transitions.css";
import "../styles/sidebar.css";
import vec1 from "../styles/vectors/vector1.png";
import vec2 from "../styles/vectors/vector2.png";

import ProfPic from "./ProfPic.js";

class Username extends React.Component {
  constructor(props) {
    super(props);

    this.username = this.props.username;
    
  }
  
  render() {
    console.log("Rendering username:", this.props.username)
    return <div className="Username">{this.props.username}</div>;
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);

   // this.userData = this.props.userData;
    this.avatar = this.props.avatar;
    this.username = this.props.username
    console.log(this.username)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ data: nextProps.data });  
  }

  render() {
   // console.log('SIDE BAR IS RENDERING!');
   // console.log(this.props.avatar)
    var addStream = this.props.addStream;
    var addOcean = this.props.addOcean;
    var addArchive = this.props.addArchive;
    var addPrompt = this.props.addPrompt;
    return (
      <div className="SideBar">
        <ProfPic classType="avatar" avatar={this.props.avatar} />

        <Username username={this.props.username} />
        <Button
          className="Button"
          block
          bsSize="large"
          addStream={this.props.addStream}
          onClick={i => addStream("somevar")}
        >
          stream
        </Button>
        <Button
          className="Button"
          block
          bsSize="large"
          addOcean={this.props.addOcean}
          onClick={i => addOcean("somevar")}
        >
          ocean
        </Button>
        <Button
          className="Button"
          block
          bsSize="large"
          addArchive={this.props.addArchive}
          onClick={i => addArchive("somevar")}
        >
          archive
        </Button>
        <Button
          className="Button"
          block
          bsSize="large"
          addArchive={this.props.addPrompt}
          onClick={i => addPrompt("somevar")}
        >
          prompt
        </Button>

        <img className="sidebar-vector1" src={vec1} alt="vector1" />
        <img className="sidebar-vector2" src={vec2} alt="vector1" />
      </div>
    );
  }
}

export default SideBar;