import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { setUserDataActionCreator } from '../../redux/reducers/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true	
    })			
      .then((response) => {
				if (response.data.resultCode === 0)	{
          let {id, email, login} = response.data.data;
					this.props.setUserDataActionCreator(id, email, login);
        }
			});
  }
  render() {
    return <Header {...this.props} />
  }
}

function mapStateToProps(state) {
  return {
    // Auth status :: boolean
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}

export default connect(mapStateToProps,{setUserDataActionCreator})(HeaderContainer)