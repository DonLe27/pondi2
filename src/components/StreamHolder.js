import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logout from './Logout.js';
import { connect } from "react-redux";

import '../styles/transitions.css';
import '../styles/streamholder.css';

import { Motion, spring } from "react-motion";

import Stream from './Stream.js';
import Ocean from './Ocean.js';
import Archive from './Archive.js';
import SideBar from './SideBar.js';

class StreamHolder extends React.Component {
    constructor(props) {
        super(props);
        // parse through data, get username, etc
        this.userData = {
            "username": "this is a username",
            "avatar": "stingray",
            "prompts": [{
                    "title": "This is the first title, from archive",
                    "content": "this is some content. This is some more content. This is more content",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
                {
                    "title": "This is the second title, from archive",
                    "content": "this is some more content. Lorem ipsum something dolor blah",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
            ]
        };
        this.streamData = {
            "prompts": [{
                    "title": "This is the first title for stream",
                    "content": "this is some content. This is some more contnet. This is more content",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
                {
                    "title": "This is the 2nd title for stream",
                    "content": "this is some content. This is some more contnet. This is more content",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
                {
                    "title": "This is the 3rd title for stream",
                    "content": "this is some content. This is some more contnet. This is more content",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
                {
                    "title": "This is the 4th title for stream",
                    "content": "this is some more content. Lorem ipsum something dolor blah",
                    "date": "Jan 1, 1111",
                    "avatar": "stingray"
                },
            ]
        };
        this.state = {
            stream: true,
            archive: false,
            ocean: false,
            leftSide: <SideBar 
            userData={this.userData}
            addStream={this.addStream.bind(this)} 
            addArchive={this.addArchive.bind(this)}
            addOcean={this.addOcean.bind(this)}
            />



        };
        this.handleAdd = this.handleAdd.bind(this);
        this.addStream = this.addStream.bind(this);
        this.addOcean = this.addStream.bind(this);
        this.addArchive = this.addStream.bind(this);
    }

    handleAdd(i) {}

    addStream(i) {



        this.setState({ archive: false, stream: true, ocean: false });




    }

    addOcean(i) {

        this.setState({ archive: false, stream: false, ocean: true });

    }

    addArchive(i) {

        this.setState({ archive: true, stream: false, ocean: false });

    }

    componentDidMount() {
        document.body.style.margin = "0";
        document.body.style.overflow = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflow = "hidden";

    }


    render() {
        // if (!this.props.isAuthenticated) {
        //   return <Redirect to="/" />
        // }

        const { ...props } = this.props;

        return (
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
            {this.state.stream && <Stream  streamData={this.streamData} userData={this.userData}/>}
               </div>
                )}
        </Motion>

         <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.ocean ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.ocean && <Ocean  streamData={this.streamData} userData={this.userData}/>}
                          </div>

                )}
        </Motion>

         <Motion 
            defaultStyle={{opacity: 0}}
            style={{opacity: spring(this.state.archive ? 1 : 0, {stiffness: 50, damping: 20})}}
        >
            {(style) => (
                <div  style={{opacity: style.opacity}}>
            {this.state.archive && <Archive  streamData={this.streamData} userData={this.userData}/>}          
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
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamHolder);