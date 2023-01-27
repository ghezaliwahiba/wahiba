import React, { useEffect, useState } from 'react';
import "./About.css";

//nous allons utiliser useState et useeffect pour faire des calls API :
const About = () => { //useEffect  nous permettra de déclencher le fetch;
     const [DataAbout, setDataAbout] = useState([]); //Créez un état en utilisant le useState hook pour stocker ces données et les restituer sur le DOM.
    //Le state local est présent à l’intérieur d’un composant : ce composant peut être re-render autant de fois que l'on veut, mais les données seront préservées. Pour cela on utilise  useState  , un hook qui permet d'ajouter un state local dans un composant fonction.
     useEffect(()=>{ //useState  permettra de stocker le retour de l'API dans le  state  . 
    fetch('DataApropos.json' //Le chemin d'accès à notre fichier JSON doit être soit 'data.json'ou './data.json'
  
    )
      .then(function(res){
        console.log(res)
        return res.json();
      })
      .then(function(monJson) {
       console.log(monJson)
          setDataAbout(monJson)

        .catch((error) => console.log(error))
      });

  })
 
     return (
         <div className='about'>
                 {DataAbout.map((DataApropos, index) => (
                    <div 
                         key={index} label={DataApropos.label}  >
                             <p>{DataApropos.text}</p>
                     </div>
                    
                    
                 ))}

         </div>
     );
 };
 
  export default About