import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SignIn extends Component {
    constructor(props){
        super(props);
            this.state={
                email:'',
                password:''
            }

    }
    render() {
        return (
            <div className="col-md-12">
            <div className="form-row">
                <h2 className="title-blue">Sign In</h2>
                <div className="form-group d-block">
                    <input className="form-control" type="text" placeholder="E-mail" onChange={event=> this.setState({email: event.target.value})}/>
                    <input className="form-control" type="password" placeholder="Password" onChange={event=> this.setState({password: event.target.value})}/>
                    <button className="btn btn-primary form-control" type="button">Sign In</button>
                </div>


<div className="col-md-12">
    <Link to="/signup">If you haven't sign up, Click here to register</Link>
</div>
                
            </div>
            </div>
        );
    }
}

export default SignIn;