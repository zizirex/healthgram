import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Profile.css';

import { Alert, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle,  } from 'reactstrap';
import JumbotronProfile from "./Jumbo";

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import {  CardLink } from 'reactstrap';
class Profile extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      toEdit: false

    };

    this.getUserFeed = this.getUserFeed.bind(this);
    this.logout = this.logout.bind(this);

  }



  componentWillMount() {

   if(sessionStorage.getItem("userData")){
    this.getUserFeed();
   }
  
   else{
    this.setState({redirectToReferrer: true});
   }
   

  }

  getUserFeed() {
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = { id: data.id, username: data.username, email: data.email, address: data.address, name: data.name, phone: data.phone, date_of_birth: data.date_of_birth, postal_code: data.postal_code, city: data.city, country: data.country };
    this.setState(postData);
  }

  onChange(e){
    this.setState({userFeed:e.target.value});
    
   }

   logout(){
     sessionStorage.setItem("userData",'');
     sessionStorage.clear();
     this.setState({redirectToReferrer: true});
   }

   handleSubmit = () => {
    this.setState(() => ({
        toEdit: true
      }));
      
  }

  render() {

    if (this.state.toEdit === true) {
      return <Redirect to='/complete' />
    }

    if (this.state.redirectToReferrer) {
      return (<Redirect to={'/signin'}/>)
    }

    
    return (
      <div>
      <JumbotronProfile name={this.state.name} />
        <Container>
        <Row className="justify-content-sm-center mb-5">
          <Col xs="12" lg="12" className="text-right">
          <Button className="btn-outline-dark btn bordercurve" onClick={this.logout}>Logout</Button>
          </Col>
          </Row>
        
          <Row className="justify-content-sm-center mb-5">
          <Col xs="12" lg="7" className="text-left">
            <div className="display-4"><strong>Basic Info</strong></div>
            <div className="profile-info mt-2">
            <p><strong>Fullname: </strong>{this.state.name}</p>
            <p><strong>Birthday: </strong>{this.state.date_of_birth}</p>
            <p><strong>Username: </strong>{this.state.username}</p>
            </div>
            <div className="display-4 mt-5"><strong>Contact Info</strong></div>
            <div className="profile-info mt-2">
            <p><strong>Email: </strong>{this.state.email}</p>
            <p><strong>Location: </strong>{this.state.address}</p>
            <p><strong>City: </strong>{this.state.city}</p>
            <p><strong>Country: </strong>{this.state.country}</p>
            <p><strong>Phone: </strong>{this.state.phone}</p>
            </div>
            
            <Button className="btn-outline-dark btn mt-3 bordercurve" onClick={this.handleSubmit}>Complete Your Profile</Button>
            
        


          </Col>
                  <Col xs="12" lg="5" className="member justify-content-center align-self-center text-center">
                 
                  <Card  active>
                    <CardBody>
                        <CardTitle className="standard">Membership</CardTitle>
                        <div className="loginjumbo colw">
                        <CardLink href="#" ><h2 className="font-weight-bold">Premium</h2></CardLink>
                        </div>
                        <CardText className="list-unstyled">
                            <li>Pick Multiple Location</li></CardText>
                        <CardText className="list-unstyled">
                            <li>Manage Multiple Profiles</li></CardText>
                        <Button className="btn-outline-dark btn bordercurve">Change Plan</Button>

                    </CardBody>
                </Card>
               
                  </Col>
          </Row>
        

        </Container>
      
      </div>
    );
  }
}

export default Profile;