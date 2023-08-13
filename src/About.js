import { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <>
        <p>KJP industries developers: Josh, Kyle and Peter </p>
        <p>Check out our projects at:</p>
        <p>
          <a href='https://github.com/orgs/KJP-Industries/repositories'>
            {'https://github.com/orgs/KJP-Industries/repositories'}
          </a>
        </p>
      </>
    );
  }
}

export default Profile;
