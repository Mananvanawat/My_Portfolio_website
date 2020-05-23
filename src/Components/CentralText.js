import React, { Component } from 'react';
import './CentralText.scss';
import imagec from './banner.png'
class CentralText extends Component {
  
    render() { 
        return (<div class='body1'>
             <img className="imageclass" src={imagec} alt=""/>
             <div class="wrapper">
        <div class="letters"><span class="letter">I</span><span class="letter">'</span><span class="letter">M</span><span class="letter"> </span><span class="letter">M</span><span class="letter">a</span><span class="letter">n</span><span class="letter">a</span><span class="letter">n</span></div>
        </div>
    <div class="wrapper1">
    <div class="letters"><span class="letter">H</span><span class="letter">i</span><span class="letter">!</span></div>
    </div> 
    </div>

    );
  }
}
 
export default CentralText;