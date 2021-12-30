const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postData:[
        {id:1, message: 'just a message', countlikes:'11'},
        {id: 2, message: 'sucsessful message', countlikes:'79'}
    ],
    newPostText: 'piu'
};

export default function profileReducer(state = initialState, action) {

    switch (action.type) {        
        case ADD_POST: 
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id:5, message: state.newPostText, countlikes: '0'}],
            };        
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
            };        
        default:
            return state;
    }    
}

export function addPostActionCreator() {
	return {
    type: ADD_POST
    }
};
export function updatePostActionCreator(text) {
	return {
    type: UPDATE_NEW_POST_TEXT, 
	newText: text 
    }
};


