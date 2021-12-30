import React from 'react';

import classes from "./Profile.module.css";
import background from "../../image/background.jpg";

import UserData from './userData/UserData';
import UsersPost from './users-posts/Users-posts';


function Profile(props) {
    // debugger
    return (
        <main className={classes.main}>
            <img className={classes.bg_img} src={background} alt=""/>
            <UserData />
            <UsersPost postData={props.state.postData}
            newPostText={props.state.newPostText}
            />
        </main>
    )
}

export default Profile;