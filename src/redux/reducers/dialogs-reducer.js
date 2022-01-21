//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messagesData:[
        {id: 1, name: 'Tony', message:'Hey'},
        {id: 2, name: 'Cap', message:'Hello'},
        {id: 3, name: 'Natasha', message:'Privet'}
    ],
    dialogsData:[
        {id: 1, name: 'Tony'},
        {id: 2, name: 'Cap'},
        {id: 3, name: 'Natasha'}
    ],
};

export default function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageText;
            return {
                ...state,
                messagesData: [...state.messagesData,{name: 'me', id: 6, message: body}]
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
