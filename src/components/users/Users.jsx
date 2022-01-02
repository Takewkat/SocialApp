import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Users.module.css';
import user_image from'../../image/post.jpg'


function Users(props) {
	// debugger	
	let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize)

	let pages = [];
	for ( let i=1; i <= pagesCount; i++) {
		if (pages.length < 10) {
			pages.push(i);
		};
	}
	return (
		<div className={classes['users']}>
		<div className={classes['users-paginator']}>
		<div>Page size: {props.pageSize}</div>
		<div>Total count: {props.totalUsersCount}</div>
		<div>Current Page: {props.currentPage}</div>

			<ul className={classes['users-paginator__list']}>
			{
				pages.map((pageNumber) => {
				return (
					<li key={pageNumber} className={classes['users-paginator__item']}>
					<button
						className={`
						${classes['users-paginator__link']} 
						${props.currentPage === pageNumber && classes['active']}`
						}
						onClick={(e) => {
						props.onPageChanged(pageNumber)
						}}
					>
						{pageNumber}
					</button>
					</li>
				)
				})
			}
			</ul>
		</div>
		<div className={classes['users-list-container']}>
			<ul className={classes['users-list']}>     
			{
				props.users.map(user => (
					<li className={classes['users-list__item']} key={user.id}>
						<div className={classes['user']}>
							<NavLink to={"/profile/" + user.id}>             
							<img src={user.photos.small != null ? user.photos.small : user_image} className={classes['user__image']} alt="avatar"/>
							</NavLink>
							{user.followed 
							? <button onClick={() => {props.unfollow(user.id)}} className={classes['user__follow-button']}>Follow</button> 
							: <button onClick={() => {props.follow(user.id)}} className={classes['user__follow-button']}>Unfollow</button>}								
							<div className={classes['user__id']}>{user.id}</div>                
							<div className={classes['user__name']}>{user.name}</div>
							<div className={classes['user__status']}>{user.status}</div>
							<div className={classes['user__address']}>{"user.location.country"}</div>
							<div className={classes['user__address']}>{"user.location.city"}</div>								
						</div>				
					</li>
				))
			}
			</ul>
		</div>
		<div className={classes['users-footer']}>
			<button className={classes['users-footer__button']}>Show more</button>
		</div>
	</div>
	)
}

export default Users;