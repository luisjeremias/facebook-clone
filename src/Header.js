import React  from 'react';
import './App.css';
import {FaFacebook,FaSearch,FaAlignJustify,FaFacebookMessenger,FaCaretDown,FaBell} from 'react-icons/fa';
function Header(){
  return (
    <div className="Header">
   <div className="header">
    <div className="headerLeft">
    <div className="logo-fb">
    <FaFacebook/>
    </div>
    <div className="search-fb">
    <FaSearch/>
    </div>
    <div className="menu-fb">
    <FaAlignJustify/>
    </div>
  </div>
  <div className="headerRight">
    <div className="plus-btn">
      +
    </div>
    <div className="mensenger">
    <FaFacebookMessenger/>
  </div>
    <div className="bell">
    <FaBell/>
    </div>
    <div className="down">
    <FaCaretDown/>
    </div>
    </div>
  </div>
    </div>
  );
}
export default Header;