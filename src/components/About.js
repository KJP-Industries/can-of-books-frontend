import { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <main className="h-100 p-5">
        <p>KJP industries developers: Josh, Kyle and Peter </p>
        <p>Check out our projects at:</p>
        <p>
          <a href="https://github.com/orgs/KJP-Industries/repositories">
            {'https://github.com/orgs/KJP-Industries/repositories'}
          </a>
        </p>
      </main>
    );
  }
}

export default Profile;
