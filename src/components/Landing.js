import React from 'react';
import LoginButton from './LoginButton';
import {Link, Redirect} from "react-router-dom";
import "../styles/landing.css";

// function randomSize(size) {
//     var sx = Math.round(Math.random() * size);
//     return sx + "px";
// }

const Landing = () => (
  <div className="Landing" >
    < LoginButton />
	{/* <link href="../styles/landing.css" rel="stylesheet"></link> */}

    {/* <LoginButton className="LoginButton"/> */}
        <div className="PondiCircles one"></div>
        <div className="PondiCircles two" ></div>
        <div className="PondiCircles three" ></div>
        <div className="PondiCircles four" ></div>
        <h1 className="LandingTitle">pondi</h1>
    {/* <Form className="LandingPrompt"/> */}

    <form>
        <legend>What's your favorite fruit?</legend>
        <input/>
        <Link to='/register'>Register</Link>
    </form>

  </div>
)

// class Form extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
    
//     render() {
//         return (
//             <div className="form-group">
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                      is water wet?
//                      <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <Link to='/register'>
//                     <button className="btn btn-primary">start your journal</button>
//                 </Link>
//             </form>
//             </div>

//             // <form onSubmit={this.handleSubmit}>
               
//              //     <label>
//             //         is water wet?
//             //         <input type="text" value={this.state.value} onChange={this.handleChange} />
//             //     </label>
//             //     <input type="submit" value="start your journal" />
//             // </form>
//         );
//     }
// }

export default Landing