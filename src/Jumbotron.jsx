import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Example = (props) => {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                <h1 className="title-blue">Ready for a new trip?</h1>
                <p className="lead">Lorem ipsum dolor sil amet.</p>


                    <button color="primary" className="cta">Plan Your Trip</button>

                </Container>
            </Jumbotron>
        </div>
    );
};

export default Example;