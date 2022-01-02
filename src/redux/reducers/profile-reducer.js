const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	postData:[
		{id:1, message: 'just a message', countlikes:'11'},
		{id: 2, message: 'sucsessful message', countlikes:'79'}
	],
	newPostText: 'piu',
	profile: null,
};

export default function profileReducer(state = initialState, action) {
	switch (action.type){        
		case ADD_POST: 
			return {
				...state,                
				postData: [...state.postData, {id:5, message: state.newPostText, countlikes: '0'}],
				newPostText: '',
			};        
		case UPDATE_NEW_POST_TEXT: 
			return {
				...state,
				newPostText: action.newText,
			};
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}        
		default:
			return state;
	}    
}
//ACTION CREATORS:
export function addPostActionCreator() {return {type: ADD_POST}};
export function updatePostActionCreator(text) {
	return {
    type: UPDATE_NEW_POST_TEXT, 
		newText: text 
    }
};
export function setUserProfile(profile){
	return {
		type: SET_USER_PROFILE,
		profile
	}
};


