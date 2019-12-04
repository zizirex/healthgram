import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronProfile = (props) => {
  return (
    <div>
      <Jumbotron fluid className="loginjumbo">
        <Container>
          <h1 className="display-5">Hey, {props.name}!</h1>
          <div className="round"></div>
  
         
    
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronProfile;