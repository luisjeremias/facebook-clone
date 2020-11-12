import React from 'react';
import './App.css';
import Header from './Header';
import Stories from './Stories.js';
import Feed from './Feed.js';
function App() {
  return (
   <div className="app">
  <Header/>
  <Stories/>
  <Feed/>
   </div>
  );
}

export default App;
