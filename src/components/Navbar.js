import '../navbar.css';
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
  let navbarList = ["Home", "Project", "About", "Vision", "Hisory", "Team"]
  return(
    <div className="navbar">
      {navbarList.map(item => 
        <Link activeClass="active" to={item} spy={true} smooth={true} offset={-70} duration={500}>
          <button className="nav-button">{item}</button>
        </Link>
      )}
    </div>
  )
}

export default Navbar; 