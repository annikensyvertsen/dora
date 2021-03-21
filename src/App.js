import logo from './dora_logo.svg';
import './App.css';
/* import Navbar from './components/Navbar';
 */import Home from './components/home';
import { Vision } from './components/Vision';
import { Link, animateScroll as scroll } from "react-scroll";
import Project from './components/project';


const App = () => {
  let navbarList = ["Home", "Project", "About", "Vision", "Hisory", "Team"]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
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
      </div>
     
    </div>
  );
}

export default App;
