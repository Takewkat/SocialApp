import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Users from './Users';
import Loading from '../common/loading/Loading'
import { follow, unfollow, 
	setUsers, setCurrentPage, 
	setTotalUsersCount, toggleIsFetching } from '../../redux/reducers/users-reducer';
class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.toggleIsFetching(true);
		if (this.props.users.length === 0) {		
			axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${this.props.currentPage}&count=${this.props.pageSize}`)
				.then((response) => {
					this.props.toggleIsFetching(false);
					//debugger
					this.props.setUsers(response.data.items);
					this.props.setTotalUsersCount(response.data.totalCount);
				})
		}
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users/?page=${pageNumber}&count=${this.props.pageSize}`)
				.then((response) =>{
					this.props.toggleIsFetching(false);
					this.props.setUsers(response.data.items)
				});
	}
	render() {
		return <>
			{this.props.isFetching ? <Loading /> : null}
			<Users 
			onPageChanged={this.onPageChanged}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
			totalUsersCount={this.props.totalUsersCount}
			pageSize={this.props.pageSize}
			currentPage={this.props.currentPage}
			users={this.props.users}
			/>
		</>
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

export default connect(mapStateToProps, 
	{follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);

