import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageActionCreator } from '../../../redux/reducers/dialogs-reducer';
import Messages from './Messages';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateMessageActionCreator(body));
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;