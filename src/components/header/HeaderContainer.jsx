import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import {getAuthInfo} from '../../redux/reducers/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthInfo();
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

export default connect(mapStateToProps,{getAuthInfo})(HeaderContainer)