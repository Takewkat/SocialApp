import React from 'react';

import classes from "./Users-posts.module.css";

import Post from './post/Post';
import NewPostContainer from './new-post/New-post-container';

function UsersPost(props) {

	let postElements = props.postData.map((postData, key) => {
		return(
			<li className={ classes['user-posts__item'] } key={key}>
				<Post fullName={postData.fullName} message={postData.message} />
			</li>
		)
	});

	return (
		<div className={ classes['user-posts'] }>
			<NewPostContainer />
			<ul className={ classes['user-posts__list'] }>
				{postElements}
			</ul>
		</div>
	)
}

export default UsersPost;