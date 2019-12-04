import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Button } from 'reactstrap';

const Example = (props) => {
    return (
        <div className="fluid row justify-content-around mx-auto px-5 py-5 price">
            <Card className="col-md-3 my-4 py-3 mx-2">
                <CardBody>
                    <CardTitle className="basic">Basic</CardTitle>
                    <CardLink href="#" ><h2 className="">Free</h2></CardLink>

                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li>
                    </CardText>
                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li>
                    </CardText>
                    <Button className="btn-outline-dark btn bordercurve">Get Started</Button>
                </CardBody>
            </Card>
            <Card className="col-md-3 my-4 py-3 mx-2" active>
                <CardBody>
                    <CardTitle className="standard">Standard</CardTitle>
                    <CardLink href="#" ><h2 className="">$3.99/Month</h2></CardLink>

                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li></CardText>
                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li></CardText>
                    <Button className="btn-outline-dark btn bordercurve">Get Started</Button>

                </CardBody>
            </Card>
            <Card className="col-md-3 my-4 py-3 mx-2">
                <CardBody className="">
                    <CardTitle className="premium">Premium</CardTitle>
                    <CardLink href="#" ><h2 className="">$6.99/Month</h2></CardLink>

                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li></CardText>
                    <CardText className="list-unstyled">
                        <li>Lorem Ipsum</li></CardText>

                    <Button className="btn-outline-dark btn bordercurve">Get Started</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;