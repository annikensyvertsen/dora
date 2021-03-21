import logo from './dora_logo.svg';
import './App.css';
import Home from './components/home';
import { Vision } from './components/Vision';
import { Link, animateScroll as scroll } from "react-scroll";
import Project from './components/project';
import  {About}  from './components/About';
import {History} from './components/History'
import Team from './components/Team';


const App = () => {
  let navbarList = ["Home", "Project", "About", "Vision", "History", "Team"]
  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  return (
    <div className="App">
      <header className="App-header">
        <Link onClick={scrollToTop}>
          <img src={logo} className="App-logo" alt="logo" />    
        </Link>
        <div className="navbar">
        {navbarList.map(item => 
          <Link activeClass="active" to={item} spy={true} smooth={true}  duration={500} key={item}>
            <button className="nav-button">{item}</button>
          </Link>
        )}
      </div>
      </header>
      <div className="mainContent"> 
        <div id="Home">
          <Home />
        </div>
        <div id="Vision">
          <Vision />
        </div>
        <div id="Project">
         <Project />
        </div>
        <div id="About">
          <About/>
        </div>
        <div id="History">
          <History/>
        </div>
        <div id="Team">
          <Team />
        </div>
      </div>
     
    </div>
  );
}

export default App;
