import React from "react";
import {connect} from 'react-redux';
import {useMatch} from "react-router-dom";

import Profile from "./Profile";
import {loadProfile, loadStatus} from "../../redux/reducers/profile-reducer";

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId');
  return <ProfileContainer {...props} match={match} />;
}
class ProfileContainer extends React.Component {
	
	componentDidMount() {
		//let userId = this.props.match ? this.props.match.params.userId : 'MyID';
		this.props.loadProfile();
    this.props.loadStatus();
	}
	
  componentDidUpdate() {  
    this.props.loadProfile(/* user id */ );
    this.props.loadStatus();
  }

	render() {
		return (
			<Profile/>
		)	
	}
}

let mapStateToProps = (store) => ({
	profile: store.profilePage.profile,
	postData: store.profilePage.postData,
})

export default connect(mapStateToProps,{loadProfile, loadStatus})(ProfileURLMatch);