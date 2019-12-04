import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronLogin = (props) => {
  return (
    <div>
      <Jumbotron fluid className="loginjumbo">
        <Container fluid>
          <h1 className="display-5">Fill your information to sign in</h1>
          <h1 className="display-3">or</h1>
          <h1 className="display-5">Sign Up to become a member</h1>
    
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronLogin;