import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
    render() { 
        return ( 
          <div className="project">
          <div style={{fontSize:'8vw'}} className="heading">PROJECTS</div>
          <div class="cards-list">
  
<div class="card 1">
  <div class="card_image"> <img src="https://i.redd.it/b3esnz5ra34y.jpg" /> </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>

  <div class="card 2">
  <div class="card_image">
    <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
    </div>
  <div class="card_title title-white">
    <p>Card Title</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" />
  </div>
  <div class="card_title">
    <p>Card Title</p>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" />
    </div>
  <div class="card_title title-black">
    <p>Card Title</p>
  </div>
  </div>

</div>
  

         


          </div>
         );
    }
}

export default Projects;