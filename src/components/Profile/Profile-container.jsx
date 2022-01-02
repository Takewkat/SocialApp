import React from "react";
import * as axios from 'axios';
import { connect } from 'react-redux';

import Profile from "./Profile";
import { setUserProfile } from "../../redux/reducers/profile-reducer"

class ProfileContainer extends React.Component {

	componentDidMount() {
			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
				.then((response) => {
					//debugger
					this.props.setUserProfile(response.data);
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);