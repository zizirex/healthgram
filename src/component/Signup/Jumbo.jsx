import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronSignup = (props) => {
  return (
    <div>
      <Jumbotron fluid className="loginjumbo">
        <Container fluid>
          <h1 className="display-5">You are just few click away</h1>
          <h1 className="display-3"></h1>
          <h1 className="display-5">Sign Up to become a member</h1>
    
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronSignup;