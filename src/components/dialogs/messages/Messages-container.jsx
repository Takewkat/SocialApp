import {connect} from 'react-redux';
import {sendMessageActionCreator} from '../../../redux/reducers/dialogs-reducer';
import Messages from './Messages';

function mapStateToProps (store) {
    return {
        messagesData: store.dialogsPage.messagesData,
        newMessageBody: store.dialogsPage.newMessageBody,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        sendMessage: (messageText) => {
            dispatch(sendMessageActionCreator(messageText));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;