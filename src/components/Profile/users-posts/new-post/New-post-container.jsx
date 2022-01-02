import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/reducers/profile-reducer';
import NewPostForm from './New-post';


function mapStateToProps (store) {
    return {        
        newPostText: store.profilePage.newPostText,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatenewPostText: (text) => {
            dispatch(updatePostActionCreator(text));
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostForm);

export default NewPostContainer;
