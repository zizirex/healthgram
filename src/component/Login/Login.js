import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../services/PostData';
import JumbotronLogin from "./Jumbo";
import { BrowserRouter } from 'react-router-dom'

import { Alert, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle,  } from 'reactstrap';

import './Login.css';

class Login extends Component {

  constructor(){
    super();
   
    this.state = {
     username: '',
     password: '',
     redirectToReferrer: false,
     alertBox: false,
      usernameError: "",
      passwordError: "",
      toSignup: false

    };

    this.login = this.login.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);


  }

  handleSubmit = () => {
    this.setState(() => ({
        toSignup: true
      }));
      
  }

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      passwordError: "",
      alertBox: false
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.alertBox= true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }
    if(this.state.password==''){
      isError=true;
      errors.alertBox= true;
      errors.passwordError="Password Cannot be empty";
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  }


  login(e) {
      e.preventDefault();
  
      const errors = {
        usernameError: "",
        passwordError: "",
        alertBox: false
      };

      const err = this.validate();

      if (!err) {
        this.setState({usernameError: "", passwordError: "", alertBox: false});
        PostData('login',this.state).then((result) => {
          let responseJson = result;
            if(responseJson.redirectToReferrer===true){         
              sessionStorage.setItem('userData',JSON.stringify(responseJson));
              this.setState({redirectToReferrer: true});
            }
            else{
              errors.alertBox= true;
              errors.usernameError = "Username/Password is Incorrect";
              this.setState({...this.state, ...errors});
            }
         });
      }
   }


  onChange(e){
    this.setState({[e.target.name]:e.target.value});
   } 

  

  render() {

    if (this.state.toSignup === true) {
      return <Redirect to='/signup' />
    }

     if (this.state.redirectToReferrer) {
      return (<Redirect to={'/Profile'}/>)
    }
   
    if(sessionStorage.getItem('userData')){
      return (<Redirect to={'/Profile'}/>)
    }



    const style =this.state.alertBox ? {display: 'block'} : {display: 'none'};

     return (
      <div>
        <JumbotronLogin />
        <Container>
      
          <Row className="justify-content-sm-center mb-5">
          <Col xs="12" lg="7">
          <div className="br-1">
                  <Card className="widthcard">
                      {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                      <CardBody>                          
                      <CardTitle>Login</CardTitle>
                      <hr />
                      
                      <Alert className="alert" style={style} color="danger">
                        <div className="block">{this.state.usernameError}</div>
                        <div className="block">{this.state.passwordError}</div>
                      </Alert>

                       <Form>
                        <FormGroup row>
                          <Label for="exampleEmail" sm={3}>Username</Label>
                          <Col sm={9}>
                            <Input type="text" name="username" onChange={this.onChange} placeholder="Username" />
                          </Col>
                        </FormGroup>
                        <FormGroup row>
                          <Label for="examplePassword" sm={3}>Password</Label>
                          <Col sm={9}>
                            <Input type="password" name="password" onChange={this.onChange} placeholder="Password" />
                          </Col>
                        </FormGroup>


                        <FormGroup check row>
                        <Row>
                          <Col xs="12">
                            <Button type="submit" onClick={this.login}>Sign In</Button>
                            
                          </Col>
                       
                          </Row>
                        </FormGroup>
                    </Form>
                    <br />
                    <a className="button" href="/forgot">Forgot Password?</a>
         
                      </CardBody>
                </Card>
                  </div>
                  </Col>
                  <Col xs="12" lg="5" className="justify-content-center align-self-center text-center">
                 
                  <h1 className="display-5 ">Not a member yet?</h1>
                  
                  
                  <Button color="primary" onClick={this.handleSubmit} size="lg">Sign Up</Button>
               
                  </Col>
          </Row>
          
        </Container>
   
          
        

          
        
      </div>
    );
  }
}

export default Login;