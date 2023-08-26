import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: process.env.REACT_APP_REDIRECT } })
      }
      variant="danger"
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
