import React from 'react';

import classes from "./Profile.module.css";
import background from "../../image/background.jpg";

import UserDataContainer from './userData/UserData-container';
import UserPostsContainer from './users-posts/Users-posts-container';

function Profile() {
    // debugger
    return (
        <main className={classes.main}>
            <img className={classes.bg_img} src={background} alt=""/>
            <UserDataContainer/>
            <UserPostsContainer/>
        </main>
    )
}

export default Profile;