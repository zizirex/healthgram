import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./component/Home";
import Price from "./component/Pricing";
import Partner from "./component/Partner";
import Profile from "./component/Profile/Profile";
// import SignIn from "./component/SignIn";
import Login from './component/Login/Login';
import SignUp from "./component/Signup/Signup";
import Navigation from "./Nav2.jsx";
import Footer from "./Footer";
import CompleteProfile from './component/CompleteProfile/CompleteProfile';


const Routes = () => (
    <Router>
        <div>
            <Navigation/>

            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/pricing" component={Price} />
                <Route path="/partner" component={Partner} />
                <Route path="/profile" component={Profile} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/complete" component={CompleteProfile}/>
                <Route path="*" component={Error}/>
                <Route component={Error}/>

            </Switch>

            <Footer/>
        </div>
    </Router>
  );
  
  export default Routes;