import UsersPost from "./Users-posts";
import {connect} from "react-redux";

function mapStateToProps (state) {
    return {
        newPostText: state.newPostText,
        postData: state.postData
    }
}

export default connect(
    mapStateToProps
) (UsersPost);