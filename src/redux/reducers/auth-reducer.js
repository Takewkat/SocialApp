import AuthAPI from '../../api/authAPI';

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
}
//THUNKS
export function getAuthInfo() {
  return (dispatch) => {
  AuthAPI.getAuth()
    .then(data => {
      let {id, email, login} = data.data;
      if (data.resultCode === 0)	{        
        dispatch(setUserDataActionCreator(id, email, login));
      }
    });
  }
}

export function login(email, password, rememberMe) { 
  return (dispatch) => {
    AuthAPI.login(email, password, rememberMe)
      .then( respone => {
        console.log('promise');
        console.log(respone);
        if ( respone.data.resultCode === 0 ) {
          console.log('login');
          dispatch(getAuthInfo());
        }
      });
  }
}

export function logout() { 
  return (dispatch) => {
    AuthAPI.logout()
      .then( respone => {
        console.log(respone);
        if ( respone.data.resultCode === 0 ) {
          console.log('logout');
          dispatch(setUserDataActionCreator(null, null, null, false));
        }
      });
  }
}