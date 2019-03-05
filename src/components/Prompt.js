import React from "react";
import { Link } from "react-router-dom";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "../styles/prompt.css";

class Prompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagefile: null,
      text: "",
      prompt: "This is where the prompt goes"
    };
  }

  fileChangedHandler = event => {
    this.setState({ imagefile: event.target.files[0] });
  };

  textInputHandler = event => {
    this.setState({ text: event.target.value });
  };

  uploadHandler = () => {
    console.log(this.state.imagefile);
  };

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
            value={this.state.text}
            onChange={this.textInputHandler}
            placeholder="Type your response here"
          />
          <input
            type="file"
            id="file"
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

export default Prompt;