import React from 'react';
import './Nav.css';
import './Media.css'

import LogoIcon from '../../assets/images/Logo.svg';
import IconNav1 from '../../assets/images/Search.svg';
import IconNav2 from '../../assets/images/Favorite.svg';
import IconNav3 from '../../assets/images/History.svg';

import {Link} from 'react-router-dom';

const MainNav = (props) => {
  return (
    <nav className='MainNav'>
      <div className='LeftNav'>
        <Link className="MainNavLogo" to="/">
          <i style={{backgroundImage: `url(${LogoIcon})`}} className='LogoIcon'/>
        </Link>

        <h1 className='LogoName'>
          <Link to="/">
            ImageStock
          </Link>
        </h1>
      </div>
      <div className='RightNav'>
        <button onClick={props.onclick} value={props.value} style={{backgroundImage: `url(${IconNav1})`}}
                className='IconsNav Search'>
          <span>Поиск</span>
        </button>

        <Link to="/favorites" style={{backgroundImage: `url(${IconNav2})`}} className='IconsNav Favorite'>
          <span>Избранное</span>
        </Link>

        <Link to="/history" style={{backgroundImage: `url(${IconNav3})`}} className='IconsNav History'>
          <span>История поиска</span>
        </Link>
      </div>
    </nav>
  );
};

export default MainNav