import '../styles/Home.css';
import dora from '../img/d.jpg';

export const Home = () => {
  return(
    <div className="content">
      <div className="imgcontainer">
        <div className="square">
          <img src={dora} className="doraimg" alt="logo" />    
        </div>
      </div>
      <div className="textContainer">
        <h1 className="headertext">where dreams come true.</h1>
        <p className="hometext">Dora the Exploration Center is supposed to be open for the entirety of the population in Trondheim, as well as tourists that are visiting the city. In the summer season the center will be for the ones that mainly want a change of scenery, or who want to travel and explore tropical climate but who does not have the ability to do so. In the winter season, the vision of the center will be the same, but additionally it will be for the people who wants to get more exposure to sunlight, warmth and nature.</p>
      </div>
    </div>
    
  )
}

export default Home;