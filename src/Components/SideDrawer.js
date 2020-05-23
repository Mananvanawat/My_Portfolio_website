import React, { Component } from 'react';
import './Sidedrawer.css'
import imagec from './imagec.jpg'

class Sidedrawer extends Component {
    state = {
        button:false
    }
     openNav=()=> {
         console.log('button pressed')
        const buttonp = true;
        this.setState({button:buttonp})
      }
      
      /* Set the width of the side navigation to 0 */
       closeNav=()=> {
        const buttonp = false;
        this.setState({button:buttonp})
      }
    render() { 
        
        return ( <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

            <div style={{width:this.state.button?'350px':'0px'}} class="sidenav">
            <img src={imagec} alt="alto" style={{height:'400px',width:'300px',borderRadius:'15px',margin:'20px',position:'absolute'}}/>
  <a  class="closebtn" onClick={this.closeNav}>&times;</a>
  <h1 className="h11">Contact me!</h1>
  <div className="container">
  <a href="#" class="fa fa-facebook"></a>
  <a href="https://www.github.com/Mananvanawat" class="fa fa-github"></a>
  <a href="#" class="fa fa-instagram"></a>
  <a href="#" class="fa fa-google"></a>
  <a href="#" class="fa fa-linkedin"></a> 
  </div>
</div>

<span class = "bb" onClick={this.openNav}>&#9776;</span>

            </div> );
    }
}
 
export default Sidedrawer;