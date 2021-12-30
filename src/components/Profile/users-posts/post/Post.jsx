import React from 'react';

import classes from "./Post.module.css";
import post_avatar from '../../../../image/post.jpg'

function Post(props) {
    // debugger
    return (
            <div className={classes.post__items}>
                <div className={classes.post__item}>                    
                    <img className={classes.post_img} src={post_avatar} alt=""/>
                    <div className={classes.post__text}>{props.message}</div>
                    <div className={classes.post__like}>
                        <span>like  {props.countlikes}</span>
                    </div>
                </div>                        
            </div>            
    )
}

export default Post;