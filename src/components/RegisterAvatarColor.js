import React, { Component } from "react";
import LoginButton from './LoginButton';
import { Button, FormGroup, FormControl, Alert } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import '../styles/register.css'
import { connect } from "react-redux";
import { auth } from "../actions";


class RegisterAvatarColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.data["firstName"],
            lastName: this.props.data["lastName"],
            
            avatar: "",
            selected_avi: 0,
            color: "",
            selected_color: "#AAAAAA"
        }

        // Avatars:
        this.avatars = [
            "crab",
            "kangaroo",
            "shrimp",
            "turtle",
            "snake",
            "squirrel",
            "stingray",
            "hedgehog"
        ]

        this.colors = [
            "#7F91A8",
            "#BFD9A9",
            "#9895C1",
            "#A0A0A0",
            "#7AA1A4",
            "#ECA586",
            "#EBD08C",
            "#DC8282"
        ]

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    validate() {
        return this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.avatar !== "" &&
            this.state.color !== "";
        //&& this.state.repeated_password.length > 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.updateAvatarColor(
            this.state
        ));

        // somehow check whether or not the user was registered

        //this.register_requested();
    	//return (<Redirect to="/home" />);
    }	

    render() {
        return (
<div>
        	      <h1 className="Register-H1">Registration</h1>

            <div className="Register">
                  <form onSubmit={this.handleSubmit} className="RegisterForm">

  			<p className="register-wide-label"> Choose your Spirit Animal </p>
  			{this.avatars.map((avatar, index) => 
       			<Button key={index} className="avatar-button" onClick={() => (this.setState({avatar: avatar, selected_avi: index}))}>
       			<img src={process.env.PUBLIC_URL + avatar + ".png"} />
       			</Button>
  				)
      		}

      		<hr />

       { (this.state.avatar != "" ) &&  <p className="avatar-final" style={{background: this.state.selected_color}}>{<img src={process.env.PUBLIC_URL + this.state.avatar + ".png"} />}</p>}

     <hr />

        <p className="register-wide-label"> Choose a Color </p>

			{this.colors.map((this_color, index) => 
       			<Button key={index} style={{background: this_color}} className="color-button" onClick={() => (this.setState({color: this_color, selected_color: this_color}))}>
       			</Button>
  				)
      		}

		
<Button className="register-button"
            block
            bsSize="large"
            disabled={!this.validate()}
            type="submit"
        >next
        </Button>
</form>
		</div>

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
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateAvatarColor: (firstName, lastName, avatar, color) => dispatch(auth.updateAvatarColor(firstName, lastName, avatar, color))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAvatarColor);