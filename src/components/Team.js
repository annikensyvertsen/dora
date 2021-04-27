import '../styles/Project.css';
import eo from '../img/eo.jpg';
import jacob from '../img/jacob.jpg';
import kristoffer from '../img/kristoffer.jpg';
import bettina from '../img/bettina.jpg';
import anniken from '../img/anniken.png';



export const Team = () => {
  return(
    <div className="greenBackground">
      <div className="team">
      <div className="teamHeader">
        <h1 className="projectHeader">Team</h1>
      </div>
      <div className="teamContainer">
        <div className="portraitContainer">
          <img src={eo} className="portrait" alt="logo" />
          <div className="portraitText">
            <h3>EO</h3>
            <p className="ptext">Erik Olav has a bachelors degree in electrical engineering with specialisation on instrumentation. He is now taking a two years masters in project management. In this project most of his electrical electrical knowledge will be used, by writing about solar panels and how that will work.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={jacob} className="portrait" alt="logo" />   
          <div className="portraitText">
            <h3>Jacob</h3>
            <p className="ptext">Jacob is in his fourth year of his 5-year masters degree in Cybernetics and Robotics here at NTNU. The automated parts of the project is his main responsibility.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={kristoffer} className="portrait" alt="logo" />   
          <div className="portraitText">
            <h3>Kristoffer</h3>
            <p className="ptext">Kristoffer is in the master program for physical planning, with a background in geography. He has also taken courses within philosophy, linguistics, and psychology.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={bettina} className="portrait" alt="logo" />  
          <div className="portraitText">
            <h3>Bettina</h3>
            <p className="ptext">Bettina is currently on her fourth year of an integrated masters degree in Material Science and Engineering. She is in charge of the buildings properties, with regards to the specifics of concrete and glass. </p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={anniken} className="portrait" alt="logo" />  
          <div className="portraitText">
            <h3>Anniken</h3>
            <p className="ptext">Anniken has a bachelor degree in Informatics, and is now on her first year of a two year study of Master of Science in Informatics. To contribute with her knowledge it was decided that she should create a website for the project. </p>    
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default Team;