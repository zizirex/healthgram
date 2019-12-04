import React, {Component} from 'react';
import {PostData} from '../services/PostData';
import {Redirect} from 'react-router-dom';
import './Signup.css';
import { Alert, Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle,  } from 'reactstrap';
  import JumbotronSignup from "./Jumbo";

class Signup extends Component {

  constructor(props){
    super(props);
   
    this.state = {
     username: '',
     password: '',
     confirmPassword: '',
     email: '',
     name: '',
     redirectToReferrer: false,
     toSignin: false
    };

    this.signup = this.signup.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);

  }
 
  handleSubmit = () => {
    this.setState(() => ({
        toSignin: true
      }));
      
  }

  validateEmail = (mail) =>{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  } 


  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      passwordError: "",
      emailError: "",
      nameError: "",
      alertBox: false
    };

    if (this.state.username.length < 5) {
      isError = true;
      errors.alertBox= true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
    }

    if(this.state.password===''){
      isError=true;
      errors.alertBox= true;
      errors.passwordError="Password Cannot be empty";
    }

    if(this.state.name===''){
      isError=true;
      errors.alertBox= true;
      errors.nameError="Name Cannot be empty";
    }

    const letters = /^[a-zA-Z\s]*$/;
   
    if(!this.state.name.match(letters))
      {
        isError=true;
        errors.alertBox= true;
        errors.nameError="Your name should contain letters only";
      }
 

    if(this.state.password!==this.state.confirmPassword){
      isError=true;
      errors.alertBox= true;
      errors.passwordError="Password Needs to be same";
    }

    const emailValid = this.validateEmail(this.state.email);
    if(!emailValid){
      isError=true;
      errors.alertBox= true;
      errors.emailError="Email is not correct";
    }

    

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  }



  signup(e) {

    e.preventDefault();
    const err = this.validate();

    if (!err) { 

    
        const errors = {
          usernameError: "",
        passwordError: "",
        emailError: "",
        nameError: "",
        alertBox: false
        };

        PostData('register',this.state).then((result) => {

          this.setState({
            usernameError: "",
            passwordError: "",
            emailError: "",
            nameError: "",
            alertBox: false});

          let responseJson = result;
          console.log(responseJson.usernameError===true);
          if(responseJson.redirectToReferrer===true){  
            sessionStorage.setItem('userData',JSON.stringify(responseJson));
            this.setState({redirectToReferrer: true});
          }
          if(responseJson.usernameError===true){
            errors.alertBox= true;
            errors.usernameError = "Username Already Taken";
            this.setState({...this.state, ...errors});
          }
          
          if(responseJson.emailError===true){
            errors.alertBox= true;
            errors.emailError = "Email Already In Use";
            this.setState({...this.state, ...errors});
          }
        });


    }

    
  }

 onChange(e){
   this.setState({[e.target.name]:e.target.value});
  }

  render() {

    if (this.state.toSignin === true) {
      return <Redirect to='/signin' />
    }

    if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/profile'}/>)
    }
   
    const style =this.state.alertBox ? {display: 'block'} : {display: 'none'};

    return (



      <div>
        <JumbotronSignup />
      <Container>
      
      <Row className="justify-content-sm-center mb-5">
      <Col xs="12" lg="7">
      <div className="br-1">
              <Card className="widthcard">
                  {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
                  <CardBody>                          
                  <CardTitle>Signup</CardTitle>
                  <hr />
                  
                  <Alert className="alert" style={style} color="danger">
                    <div className="block">{this.state.usernameError}</div>
                    <div className="block">{this.state.nameError}</div>
                    <div className="block">{this.state.emailError}</div>           
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
                      <Label for="exampleEmail" sm={3}>Full Name</Label>
                      <Col sm={9}>
                        <Input type="text" name="name" onChange={this.onChange} placeholder="Name" />
                      </Col>
                    </FormGroup>


        
                    <FormGroup row>
                      <Label for="exampleEmail" sm={3}>Email</Label>
                      <Col sm={9}>
                        <Input type="text" name="email"  placeholder="Email" onChange={this.onChange}  />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="examplePassword" sm={3}>Password</Label>
                      <Col sm={9}>
                        <Input type="password" name="password" onChange={this.onChange} placeholder="Password" />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Label for="exampleEmail" sm={3}>Confirm Password</Label>
                      <Col sm={9}>
                        <Input type="password" name="confirmPassword"  placeholder="Confirm Password" onChange={this.onChange}  />
                      </Col>
                    </FormGroup>



                    


                    <FormGroup check row>
                    <Row>
                      <Col xs="12">
                        <Button type="submit" onClick={this.signup}>Sign Up</Button>
                        
                      </Col>
                   
                      </Row>
                    </FormGroup>
                </Form>
               
     
                  </CardBody>
              </Card>
              </div>
              </Col>
              <Col xs="12" lg="5" className="justify-content-center align-self-center text-center">
             
              <h1 className="display-5 ">Already Registered with us?</h1>
              
              
              <Button color="primary" onClick={this.handleSubmit} size="lg">Login Here</Button>
           
              </Col>
      </Row>
      
    </Container>

      
      
 

        </div>
        
    
    );
  }
}

export default Signup;