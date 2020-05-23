import React, { Component } from 'react';
import './About.css';
import imagec from './about.png';
class About extends Component {
    
    render() { 
        return ( <div className='abp'>
            <img className="imageClass" src = {imagec} alt=" "/>
            <h1>About Myself</h1>
            <hr style={{width:'700px'}}></hr>
            <h2>I am a CS undergrad currently in sophomore year at NMIT</h2>
            <h2 className='b'>Bangalore.I am a front end devloper,mobile app developer</h2>
            <h2 className='c'>and a Machine Learning enthusiast.</h2>
            </div> );
    }
}
 
export default About;