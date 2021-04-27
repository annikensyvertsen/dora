import '../styles/Project.css';
import dora from '../img/d.jpg';

export const History = () => {
  return(
    <div className="projectBackground">
      <div className="historyContainer">
        <div className="historyTextContainer">
          <h1 className="historyHeader">History</h1>
            <p className="historyText">

            Dora I and Dora II are the names of two submarine pens located on Brattøra in Trondheim. Construction started in 1941 and 1942 respectively, with Dora I first and Dora II second. Dora 1 completed construction in 1943, while Dora II was never completed before the end of the war. A third submarine pen was planned, located approximately 2,5 km east, but these plans were scrapped. The name Dora derives from “Drontheim”, which was the German exonym for Trondheim during the occupation. With “Dora” being the phonetic spelling of the letter “D”, with “D” standing for “Drontheim” (ibid). Other WW2 installations in Norway followed a similar pattern, with a similar installation in the city of Bergen being called “BRUNO”.
            </p>

            <p className="historyText">

            The presence of the two bunkers, made Trondheim a natural target for allied bombing operations during the war In 1944, 171 bombers took-off for Trondheim. The likely result of the bombing would have probably decimated a huge chunk of the city’s historic wood structures that dominated the townscape. However due to low lying clouds and a smokescreen the Germans created, the mission was aborted.
The initial post-war plans for the two structures were to have them demolished. However due to its massive size and thick walls, the amount of dynamite needed meant that the subsequent explosion and resulting shockwave would damage or ruin a significant part of the surrounding area.
The building today is mostly used for offices, storage and houses an archive. It is especially suited as a storage, since the inside of the bunker has a stable temperature between 12-17 degree Celsius without any need for heating.
</p>
        
</div>
        <img src={dora} className="historyImg" alt="logo" />    
      </div>
    </div>
  
  )
}

export default History;