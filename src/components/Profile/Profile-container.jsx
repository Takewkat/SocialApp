import React from "react";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { useMatch } from "react-router-dom";

import Profile from "./Profile";
import { setUserProfile } from "../../redux/reducers/profile-reducer"

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId');
  return <ProfileContainer {...props} match={match} />;
}
class ProfileContainer extends React.Component {
	
	componentDidMount() {
		let userId = this.props.match ? this.props.match.params.userId : 'MyID';
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
				.then(({data}) => {
					//debugger
					this.props.setUserProfile(data);
				})
	}	
	render() {
		return (
			<Profile 
			{...this.props}
			profile={this.props.profile}
			/>
		)	
	}
}

let mapStateToProps = (store) => ({
	profile: store.profilePage.profile,
	postData: store.profilePage.postData,
})

export default connect(mapStateToProps,{setUserProfile})(ProfileURLMatch);