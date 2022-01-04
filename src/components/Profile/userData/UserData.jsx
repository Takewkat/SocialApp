import React from 'react';

import classes from './UserData.module.css'
import avatar from "../../../image/avatar.jpg";

import UserStatus from './User-status/User-status';
import Loading from '../../common/loading/Loading';

function UserData(props) {
  if (!props.profile) {
    return <Loading />
  }  
    return (
      <>                  
        <div className={classes.user__data}>
        <div className={classes.profile__avatarform}>
          <div className={classes.avatar_img}>
              <img src={props.profile.photos.large ? props.profile.photos.large : avatar} alt="avatar"/>
          </div>
        <div className="user-data__info">INFO</div>
        </div>
        <UserStatus status="" uploadStatus="" />
          <div className="user-data__name test"></div>
          <div className="user-data__site"></div>
        </div>        
      </>
    )  
}

export default UserData