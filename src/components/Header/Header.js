import React from 'react';
import './Header.css';

const Header = () => {
  return(
    <header >
      <h1>StarDB</h1>
      <ul className="">
        <li><a href="#">People</a></li>
        <li><a href="#">Planets</a></li>
        <li><a href="#">Starships</a></li>
      </ul>
    </header>
  );
}

export default Header;
