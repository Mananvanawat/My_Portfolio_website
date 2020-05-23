import React, { Component } from 'react';
import './Navbar.css'
import Sidedrawer from './SideDrawer'
class Navbar extends Component {
    
    render() { 
        return ( 
        <div>
             
<ul>
  
  <li><a href="#central">Contact</a></li>
  <li><a href="sf">Projects</a></li>
  <li><a href="/about">About</a></li>
  <li><a className="active" href="/">Home</a></li>
  <li class="li1"><Sidedrawer/></li>
  <li><a href="#">Manan</a></li>
</ul>
            </div>
         );
    }
}
 
export default Navbar;