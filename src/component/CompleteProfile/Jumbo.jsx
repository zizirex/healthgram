import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronComplete = (props) => {
  return (
    <div>
      <Jumbotron fluid className="loginjumbo">
        <Container>
          <h1 className="display-5">You can update changes to your profile!</h1>    
    
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComplete;