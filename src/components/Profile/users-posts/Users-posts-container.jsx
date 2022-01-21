import UsersPost from "./Users-posts";
import {connect} from "react-redux";

function mapStateToProps (store) {
    //console.log("ALLO",store) ||
    return {
        postData: store.profilePage.postData
    }
}

export default connect(mapStateToProps)(UsersPost);