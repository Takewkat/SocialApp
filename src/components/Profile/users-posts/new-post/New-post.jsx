import React from 'react';

import classes from './New-post.module.css';

// Component
function NewPostForm(props) {

  let newPostElement = React.createRef();
    let addPost = () => {
      props.addPost();
    }
    let onChange = () => {
        let text = newPostElement.current.value;
        props.updatenewPostText(text);
    }

  return (
    <form className={classes['new-post']}>
      <div className={classes['new-post__area']}>
      </div>
      <div className={classes.post__title}>My posts</div>
        <div className={classes.profile__input}>
            <textarea                
            onChange={onChange}
            ref={newPostElement} 
            value ={props.newPostText}
            className={classes.form__inp}/>
            <button onClick={addPost} className={classes.btn__send}>Add post</button>
        </div>
    </form>
  )
}

export default NewPostForm