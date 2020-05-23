import React, { Component } from 'react'; 
import CentralText from './Components/CentralText'
import './Components/Navbar.css'
import './App.css'
import Sidedrawer from './Components/SideDrawer'
import About from './Components/About'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
class App extends Component {
  state={
    navbarColor:'rgb(1,86,88)'
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleEvent);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleEvent);
  }
  handleEvent=()=>{
    console.log(window.scrollY)
    window.addEventListener('scroll',(event)=>{
      if(window.scrollY>780 && window.scrollY<1589.55)
      this.reload('sandybrown')
      if(window.scrollY>1589 && window.scrollY<2384)
      this.reload('rgb(0,122,55)')
      if(window.scrollY>2384)
      this.reload('rgb(55,66,94)')
      if(window.scrollY>0 && window.scrollY<788)
      this.reload('rgb(1,86,88)')
     
    })
  }
 
  reload=(navColor)=>{
    this.setState({navbarColor:navColor})
  
  }
    render() { 
        return ( <div>
            
            
            <header>
            <div>
             
<ul style={{backgroundColor:this.state.navbarColor}}>
  <li><a href="#contact" onClick={()=>this.reload('rgb(55,66,94)')}>Contact</a></li>
  <li><a href="#projects" onClick={()=>this.reload('rgb(0,122,55)')} >Projects</a></li>
  <li><a href="#about" >About</a></li>
  <li><a className="active" href="#central" onClick={()=>this.reload('rgb(1,86,88)')}>Home</a></li>
  <li class="li1"><Sidedrawer/></li>
</ul>
            </div>
            </header>
            <div>
            <section id="central" className="central"  >
            <CentralText/>
            </section>
            </div>
            <div >
            <section  id = "about" className="about" >
            <About/>
            </section>
            </div>
            <section id="projects"  >
            <Projects/>
            </section>
            <section id="contact">
            <Contact/>
            </section>
            
        
            </div> );
    }
}
 
export default App;