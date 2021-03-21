import '../styles/Project.css';
import eo from '../img/eo.jpg';
import jacob from '../img/jacob.jpg';
import kristoffer from '../img/kristoffer.jpg';
import bettina from '../img/bettina.jpg';
import anniken from '../img/anniken.jpg';



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
            <p className="ptext">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={jacob} className="portrait" alt="logo" />   
          <div className="portraitText">
            <h3>Jacob</h3>
            <p className="ptext">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={kristoffer} className="portrait" alt="logo" />   
          <div className="portraitText">
            <h3>Kristoffer</h3>
            <p className="ptext">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={bettina} className="portrait" alt="logo" />  
          <div className="portraitText">
            <h3>Bettina</h3>
            <p className="ptext">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p>    
          </div>
        </div>
        <div className="portraitContainer">
          <img src={anniken} className="portrait" alt="logo" />  
          <div className="portraitText">
            <h3>Anniken</h3>
            <p className="ptext">Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p>    
          </div>
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default Team;