import React from 'react';
import Logo from './resources/download.png';
export default function(){
  return(
    <div className="stories">
    <div className="storiesCard" style={{backgroundImage:`url(${Logo})`}}>
    <p>Luis Geremias</p>
    </div>
    <div className="storiesCard" style={{backgroundImage:`url(${Logo})`}}>
    <p>Luis Geremias</p>
    </div>
    <div className="storiesCard" style={{backgroundImage:`url(${Logo})`}}>
    <p>Luis Geremias</p>
    </div>
    <div className="storiesCard" style={{backgroundImage:`url(${Logo})`}}>
    <p>Luis Geremias</p>
    </div>
    <div className="storiesCard" style={{backgroundImage:`url(${Logo})`}}>
    <p>Luis Geremias</p>
    </div>
    </div>
  );
}