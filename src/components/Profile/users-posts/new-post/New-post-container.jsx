import {connect} from 'react-redux';
import {addPostActionCreator} from '../../../../redux/reducers/profile-reducer';
import NewPost from './New-post';

function mapStateToProps (store) {
    return {        
        newPostText: store.profilePage.newPostText,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addPost: (name, messageText) => {
            dispatch(addPostActionCreator(name, messageText));
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
