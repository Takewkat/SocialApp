import {userAPI} from '../../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingInProgress: [], 
};

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case FOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		case UNFOLLOW: 
			return {
				...state, 
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		case SET_USERS:
			return {
				...state,
				users: action.users
			}
		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage
			}
		case SET_USERS_TOTAL_COUNT:
			return {
				...state,
				totalUsersCount: action.count
			}
		case TOGGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			}
		case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
			return {
				...state,
				followingInProgress: action.isFetching 
				? [...state.followingInProgress, action.userId]
				: state.followingInProgress.filter(id => id != action.userId)
			}
		default:
			return state;
	}    
}
//ACTION CREATORS:
export function followSucces(userId) {return {type: FOLLOW, userId}};
export function unfollowSucces(userId) {return {type: UNFOLLOW, userId}};
export function setUsers(users) {return {type: SET_USERS, users}};
export function setCurrentPage(currentPage) {return {type: SET_CURRENT_PAGE, currentPage}};
export function setTotalUsersCount(totalUsersCount) {return {type: SET_USERS_TOTAL_COUNT, count: totalUsersCount}};
export function toggleIsFetching(isFetching) {return {type: TOGGLE_IS_FETCHING, isFetching}};
export function toggleFollowingInProgress(isFetching, userId) {return {type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId}};

//THUNK 
export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true));
		//if (this.props.users.length === 0) {
			userAPI.getUsers(currentPage, pageSize).then(data => {
				dispatch(toggleIsFetching(false));
				dispatch(setUsers(data.items));
				dispatch(setTotalUsersCount(data.totalCount));
				})
		//}
	}
}

export const follow = (userId) => {
	return (dispatch) => {
		dispatch (toggleFollowingInProgress(true, userId));
		userAPI.postFollow(userId).then(data => {
			if (data.resultCode === 0)	{
				dispatch(followSucces(userId))
			}
			dispatch(toggleFollowingInProgress(false, userId));
		})
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch (toggleFollowingInProgress(true, userId));
		userAPI.deleteUnfollow(userId).then(data => {
			if (data.resultCode === 0)	{
				dispatch(unfollowSucces(userId))
			}
			dispatch(toggleFollowingInProgress(false, userId));
		})
	}
}



