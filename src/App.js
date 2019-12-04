import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';


import Routes from './routes';

import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



library.add(faEnvelope, faKey);

class App extends Component{
    render() {
        return (
            <div className="App">
                <Routes />

            </div>

        )
    }
}
export default App;
