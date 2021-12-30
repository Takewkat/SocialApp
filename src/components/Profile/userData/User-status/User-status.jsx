import React from 'react';
import classes from './User-status.module.css';

function UserStatus(props) {

    return (
        <div className={classes['user-status']}>
            <div 
                className={classes['user-status__field']}>
                status
            </div>
        </div>
    )    
}

export default UserStatus;