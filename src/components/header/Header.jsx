import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './Header.module.css';
import logo from "../../image/logo.png" 

function Header(props) {
  // debugger
  return (
    <header className={classes.header}>
      <a href="/">
        <img className={classes.header__logo} src={logo} alt="logo"/>
      </a>
      { props.isAuth ? <div className={classes['header__link']}>{props.login}</div>
      : <NavLink className={classes['header__link']} to={'/login'}>Login</NavLink>
      }       
    </header>
  )
}

export default Header