const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messagesData:[
        {id: 1, name: 'Tony', message:'Hey', date:'10.12.2021'},
        {id: 2, name: 'Cap', message:'Hello', date:'10.12.2021'},
        {id: 3, name: 'Natasha', message:'Privet', date:'10.12.2021'}
    ],
    dialogsData:[
        {id: 1, name: 'Tony'},
        {id: 2, name: 'Cap'},
        {id: 3, name: 'Natasha'}
    ],
    newMessageBody: "piu"
};

export default function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.messageText;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData,{name: 'me', id: 6, message: body, date:'11.12.2021'}]
            };        
        case UPDATE_NEW_MESSAGE_BODY: 
            return {
                ...state,
                newMessageBody: action.body
            };        
        default:
            return state;
    }
}

export function sendMessageActionCreator(messageText) {
	return {
        type: SEND_MESSAGE,
        messageText: messageText
    }
};

export function updateMessageActionCreator(body) {
	return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};