import React from 'react'
import {NavLink} from 'react-router-dom';
import './../../style/App.css';
const Header=()=>{
    const activeStyle={color:'#F15B2A'}
    return(
       <div className="header">
            <nav>
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>{' | '}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </nav>
       </div>
    )
}
export default Header;