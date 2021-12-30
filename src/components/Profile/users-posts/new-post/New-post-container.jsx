import { connect } from 'react-redux';
import { addPostActionCreator, updatePostActionCreator } from '../../../../redux/reducers/profile-reducer';
import NewPostForm from './New-post';


function mapStateToProps (state) {
    return {
        postData: state.postData,
        newPostText: state.newPostText
    }
}
function mapDispatchToProps (dispatch) {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatenewPostText: (text) => {
            let action = updatePostActionCreator(text);
            dispatch(action);
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPostForm);

export default NewPostContainer;
