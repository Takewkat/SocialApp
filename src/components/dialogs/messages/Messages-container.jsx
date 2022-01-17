import {connect} from 'react-redux';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../../redux/reducers/dialogs-reducer';
import Messages from './Messages';

let mapStateToProps = (store) => {
    return {
        messagesData: store.dialogsPage.messagesData,
        newMessageBody: store.dialogsPage.newMessageBody,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messageText) => {
            dispatch(sendMessageActionCreator(messageText));
        },
        updateNewMessageBody: (body) => {
            dispatch(updateMessageActionCreator(body));
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;