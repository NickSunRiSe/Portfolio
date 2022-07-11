import React from 'react';
import { Link } from "react-router-dom"; 

const Nav_main = () => { 
    return (
        <div className='nav_main'>
         <Link to="/main" className="nav_text">
            главная.
        </Link>
        <Link to="/music" className="nav_text">
            музыка.
        </Link>
        <Link to="/about" className="nav_text">
            история.
        </Link>
        <Link to="/contacts" className="nav_text">
            контакты.
        </Link>
      </div>
    );
};

export default Nav_main;