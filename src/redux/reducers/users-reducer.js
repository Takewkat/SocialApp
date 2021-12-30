const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [],
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
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }    
}

export function followActionCreator(userId) {
	return {
    type: FOLLOW, 
    userId
    }
};

export function unfollowActionCreator(userId) {
	return {
    type: UNFOLLOW, 
    userId
    }
};

export function setUsersActionCreator(users) {
	return {
    type: SET_USERS, 
    users
    }
};