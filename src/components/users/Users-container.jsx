import React from 'react';
import {connect} from 'react-redux';

import Users from './Users';
import Loading from '../common/loading/Loading';
import {follow, unfollow, setCurrentPage, 
	toggleFollowingInProgress,
	getUsersThunkCreator} from '../../redux/reducers/users-reducer';
class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage( pageNumber );
		this.props.getUsers(pageNumber, this.props.pageSize);
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
			followingInProgress={this.props.followingInProgress}
			toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
		followingInProgress: state.usersPage.followingInProgress,
		getUsersThunkCreator: state.usersPage.getUsersThunkCreator,
	}
}

export default connect(mapStateToProps, 
	{follow, unfollow, setCurrentPage, 
	toggleFollowingInProgress, getUsers: getUsersThunkCreator})(UsersContainer);

