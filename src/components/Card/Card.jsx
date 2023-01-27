import { NavLink } from "react-router-dom";
import React,{useState,useEffect} from 'react';
import "./Card.css";


function Card() {
  const [DataLog, setData] = useState([]); //Créez un état en utilisant le useState hook pour stocker ces données et les restituer sur le DOM.
  const getData=()=>{ //Créez une méthode getData()qui récupère le JSON local.
    fetch('data.json' //Le chemin d'accès à votre fichier JSON doit être soit 'data.json'ou './data.json'
  
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)

        .catch((error) => console.log(error))
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <section className="cards">
    {DataLog.map((data) => ( //Les clés aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. nous devons donner une clé à chaque élément dans un tableau afin d’apporter aux éléments une identité stable.
      <NavLink to={`/data/${data.id}`} key={data.id}> 
      <div className="div-card">
        <div className="card_div">
          <img
            src={data.cover}
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

export default Card;


 