import React from 'react';

import classes from './Friends.module.css'

function Friends(props) {

    let friendsElements = props.friendsData.map(m => m.name)

    return (
        <div className={classes['friends__name']}>{friendsElements}</div>
    )
}

export default Friends;