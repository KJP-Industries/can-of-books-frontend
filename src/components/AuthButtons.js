import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Image from 'react-bootstrap/Image';

import { withAuth0 } from '@auth0/auth0-react';

export default withAuth0(
  class AuthButtons extends React.Component {
    render() {
      const { isAuthenticated, auth0 } = this.props;
      return (
        <>
          {isAuthenticated ? (
            <>
              <Image
                src={auth0.user.picture}
                roundedCircle
                fluid
                height="40"
                width="40"
                className="me-3 mh-1"
              />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </>
      );
    }
  }
);
