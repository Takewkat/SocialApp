import React from 'react';
import { connect } from 'react-redux';

import classes from './Friends.module.css'

function Friends(props) {

    let friendsElements = props.friendsData.map(m => m.name)

    return (
        <div className={classes['friends__name']}>{friendsElements}</div>
    )
}

export default connect(store => ({
    friendsData: store.nav.friendsData
}))(Friends);