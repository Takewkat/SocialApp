import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

import Friends from './friends/Friends';

//activeClassName no longer support. I should find the solution
//className={({ isActive }) => "nav__link" + (isActive ? ".active" : "")}
//className={`${classes['nav__link']} ${isActive && classes['active']}`
//activeStyle={fontWeight: "bold"}

function Nav() {
  return (
    <nav className={ classes['nav']}>
      <ul className={ classes['nav__list']}>
        <li className={classes['nav__item']}>
          <NavLink className={classes['nav__link']} end to="/profile">Profile</NavLink>
        </li>
        <li className={classes['nav__item']}>
          <NavLink className={classes['nav__link']} to="/users">Users</NavLink>
        </li>
        <li className={classes['nav__item']}>
          <NavLink className={classes['nav__link']} to="/dialogs">Messages</NavLink>
        </li>
        <li className={classes['nav__item']}>
          <NavLink className={classes['nav__link']} to="/settings">Settings</NavLink>
        </li>
      </ul>
      <Friends />
    </nav>
  )
}

export default Nav