import React from 'react';
import Perfil from './resources/perfil.jpg';
import Imagem from './resources/imagem.jpg';
export default function(){
  return(
     <div className="feedPosts">
    <div className="feedPostSingle">
    <div className="feedPost__profile">
    <img src={Perfil} alt="Perfil"/>
    <h3>Luis Geremias <br/> <span>2h atrás</span></h3>
    </div>
    <div className="feedPost__content">
    <p>Ferias com a familia na praia </p>
    <img src={Imagem} alt="Imagem"/>
    </div>
    </div>
    </div>
  );
}