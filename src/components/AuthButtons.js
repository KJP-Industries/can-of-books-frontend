import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default class AuthButtons extends React.Component {
  render() {
    const { isAuthenticated } = this.props;
    return <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>;
  }
}
