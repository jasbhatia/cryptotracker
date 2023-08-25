import React from 'react'
import './Header.css';
import Drawer from './Drawer';
import Button from './button/Button';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div className='navbar'>
          <h3 className='logo'>Cryptotracker <span style={{ color: 'var(--blue)' }}>.</span></h3>
          
          <div className="links">
              <NavLink to="/"><p className="link">Home</p></NavLink>   
              <NavLink to="/compare"><p className="link">Compare</p></NavLink>  
              <NavLink to="/watchList"><p className="link">Watchlist</p></NavLink>  
                <NavLink to="/dashboard"><Button text={"Dashboard"} /></NavLink>  
                <NavLink to="/share"><Button text={ "Share"} isOutlined={true} /></NavLink>  
          
      </div>
      
      <div className="mobile-menu">
<Drawer/>
      </div>
    </div>
  )
}

export default Header
