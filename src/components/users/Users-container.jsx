import React from 'react';
import * as axios from 'axios';

import Users from './Users';

import { connect } from 'react-redux';
import { followActionCreator, unfollowActionCreator, 
	setUsersActionCreator, setCurrentPageActionCreator, 
	setUsersTotalCountActionCreator } from '../../redux/reducers/users-reducer';
class UsersContainer extends React.Component {

	componentDidMount() {
		if (this.props.users.length === 0) {		
			axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then((response) => {
					// handle success
					//debugger
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				})
		}
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
				.then((response) =>{
					// handle success
					this.props.setUsers(response.data.items)
				});
	}
	render() {
		return <Users 
		onPageChanged={this.onPageChanged}
		follow={this.props.follow}
		unfollow={this.props.unfollow}
		totalUsersCount={this.props.totalUsersCount}
		pageSize={this.props.pageSize}
		currentPage={this.props.currentPage}
		users={this.props.users}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowActionCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users))
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageActionCreator(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountActionCreator(totalCount))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

