import React from 'react';

import classes from "./Users-posts.module.css";

import Post from './post/Post';
import NewPostContainer from './new-post/New-post-container';

function UsersPost(props) {

	let postElements = props.postData.map((p, id) => {
		return(
			<li className={ classes['user-posts__item'] } key={id}>
				<Post id={p.id} message={p.message} countlikes={p.countlikes} />
			</li>
		)
	});

	return (
		<div className={ classes['user-posts'] }>
			<NewPostContainer
			newPostText={props.newPostText}
			postData={props.postData} />

			<ul className={ classes['user-posts__list'] }>
				{ postElements }
			</ul>
		</div>
	)
}

export default UsersPost;