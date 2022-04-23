import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './Data/SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import {BiMenuAltRight} from 'react-icons';
import logo from "../images/logo_dark.png";
import { useHistory } from "react-router-dom";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let history = useHistory();
  
    function handleClick() 
    {
      history.push("/");
    }
  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
        <img src={logo} alt="Logo" onClick={handleClick}/>

          <Link to='#' className='menu-bars'>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            <AiIcons.AiOutlineAlignLeft onClick={showSidebar}/>
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
                
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
