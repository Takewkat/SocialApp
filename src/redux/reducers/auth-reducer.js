const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userID: null,
  email: null,
  login: null,
  isAuth: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:         
      return {
          ...state,
          ...action.payload,
          isAuth: true,
      };        
    default:
      return state;
  }
}

export function setUserDataActionCreator(userID, email, login, isAuth) {
	return {
        type: SET_USER_DATA,
        payload: {
          userID: userID,
          email: email,
          login: login,
          isAuth: isAuth
        }
    }
};