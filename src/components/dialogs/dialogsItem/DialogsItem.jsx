import React from 'react';
import {NavLink} from 'react-router-dom';

import avatar from "../../../image/avatar.jpg";
import classes from './../Dialogs.module.css';

function DialogsItem(props) {
    return (
        <NavLink className={classes['dialog']} to={'dialogs/' + props.id}>
        <div className={classes['dialog__avatar']}>
            <img src={avatar} alt="" />
        </div>
        <div className={classes['dialog__info']}>
            <div className={classes['dialog__name']}>{props.name} </div>
            <div className={classes['dialog__message']}>{props.messages}</div>
        </div>
        </NavLink>
    )
} 

export default DialogsItem