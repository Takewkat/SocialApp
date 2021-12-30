import React from 'react';
import classes from './Header.module.css';
import logo from "../../image/logo.png" 

function Header() {
  // debugger
  return (
    <header className={classes.header}>
      <a href="/">
        <img className={classes.header__logo} src={logo} alt=""/>
      </a>
    </header>
  )
}

export default Header