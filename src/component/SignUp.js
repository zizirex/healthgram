import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            Fname:'',
            Lname:'',
            email:'',
            password:''
        }

    }
    render() {
        return (
            <div>
            <div className="form-inline">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="First Name" onChange={event=> this.setState({FName: event.target.value})}/>
                    <input className="form-control" type="text" placeholder="Last Name" onChange={event=> this.setState({LName: event.target.value})}/>
                    <input className="form-control" type="text" placeholder="E-mail" onChange={event=> this.setState({email: event.target.value})}/>
                    <input className="form-control" type="password" placeholder="Password" onChange={event=> this.setState({password: event.target.value})}/>
                    <button className="btn btn-primary" type="button">Sign Up</button>
                </div>



              <div className="form-inline">
                  <Link to="/signin">If you already registered, Click here to Sign In</Link>
              </div>

            </div>
            </div>
        );
    }
}

export default SignUp;