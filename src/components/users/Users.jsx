import React from 'react';
import classes from './Users.module.css';
import user_image from'../../image/post.jpg'
const axios = require('axios');
//import * as axios from 'axios';

export const instance = axios.create({
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers:     {
			"API-KEY": ""
		}
	});

function Users(props) {

	if (props.users.length === 0) {
	
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(function (response) {
				// handle success
				//debugger
				props.setUsers(response.data.items)
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}
	return (
		<div className={classes['users']}>
			<div className={classes['users-paginator']}>
				<ul className={classes['users-paginator__list']}>
				</ul>
			</div>
			<div className={classes['users-list-container']}>
				<ul className={classes['users-list']}>     
				{
					props.users.map(user => (
						<li className={classes['users-list__item']} key={user.id}>
							<div className={classes['user']}>             
								<img src={user_image} className={classes['user__image']} alt=""/>
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

export default Users