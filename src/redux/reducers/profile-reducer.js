import profileAPI from '../../api/profileAPI';

const ADD_POST = 'ADD_POST';
//const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
	postData:[
		{message: 'just a message', fullName: 'Captain America'},
		{message: 'sucsessful message', fullName: 'Tor'}
	],
	newPostText: 'piu',
	profile: null,
	status: '',
};

export default function profileReducer(state = initialState, action) {
	switch (action.type){        
		case ADD_POST: 
			return {
				...state,                
				postData: [...state.postData, action.newText],
				newPostText: '',
			};  
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}	
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status ? action.status : 'write status'
			};        
		default:
			return state;
	}    
}		
//ACTION CREATORS:
export function addPostActionCreator() {return {type: ADD_POST}}
export function setUserProfile (profile) {return {type: SET_USER_PROFILE, profile: profile}}
export function setStatus(status) {return {type: SET_USER_STATUS, status: status}}


//THUNKS:
/*export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.loadProfile(userId)
		.then(({data}) => {
			dispatch(setUserProfile(data));
		})
}*/
// GET profile data
export function loadProfile(userId) {
  return (dispatch) => {
    if (!userId) userId = 21212;

    profileAPI.loadProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data));
      });
  }
}
// GET status data
export function loadStatus(userId) {
  return (dispatch) => {
    if (!userId) userId = 21212;

    profileAPI.getUserStatus(userId)
      .then(status => {
        dispatch(setStatus(status))
      });
  }
}
// PUT status
export function uploadStatus(status) {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then(response => {
        if (response.data.resultCode === 0 ) {
          dispatch(setStatus(status))
        }
      });
  }
}

