import { NavLink } from "react-router-dom";
import React,{useState,useEffect} from 'react';



function Logement() {
  const [Datas, setData] = useState([]); //Créez un état en utilisant le useState hook pour stocker ces données et les restituer sur le DOM.
  const getData=()=>{ //Créez une méthode getData()qui récupère le JSON local.
    fetch('data.json' //Le chemin d'accès à votre fichier JSON doit être soit 'data.json'ou './data.json'
  
    )
      .then(function(responses){
        console.log(responses)
        return responses.json();
      })
      .then(function(resJson) {
        console.log(resJson);
        setData(resJson)

        .catch((error) => console.log(error))
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    
    <section className="cards">
    {Datas.map((data) => ( //Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. nous devons donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable.
      <NavLink to={`/data/${data.id}`} key={data.id}> 
      <div className="div-card">
        <div className="card_div">
          <img
            src={data.pictures}
            alt={data.title}
            className="card_img"
          ></img>
          <p className="card_text">{data.title}</p>
        </div>
        </div>
      </NavLink>
    ))}
  </section>
  )
 
      }

export default Logement;