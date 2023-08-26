import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container className="py-5">
        <Col xs={12} md={6} lg={2}>
          <Card>
            <Card.Img fluid src={user.picture} alt={user.name} />
            <Card.Title className="p-2">{user.name}</Card.Title>
            <Card.Body>{user.email}</Card.Body>
          </Card>
        </Col>
      </Container>
    )
  );
};

export default Profile;
