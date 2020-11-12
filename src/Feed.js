import React from 'react';
import Perfil from './resources/perfil.jpg';
import Imagem from './resources/imagem.jpg';
import {AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh} from 'react-icons/ai';
import './App.css';
import Posts from './posts.js'
function FeedPosts(){
  return (
     <div className="postarFeed">
    <div className="feed">
  <div className="feedform">
    <img src={Perfil} alt="Perfil"/>
    <input type="text" placeholder="No que voce esta pensando?"/>
  </div>
  <div className="feedIcons">
  <div className="iconSingle">
    <AiFillVideoCamera/>
    <span>Video ao vivo</span>
  </div>
   <div className="iconSingle img">
    <AiOutlineFileImage/>
    <span>Video ao vivo</span>
  </div>
   <div className="iconSingle emoji">
    <AiOutlineMeh/>
    <span>Video ao vivo</span>
  </div>
    </div>
    </div>
   <Posts/>
    </div>
    
  );
}
export default FeedPosts;