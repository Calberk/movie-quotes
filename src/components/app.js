import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import {Route} from 'react-router-dom';
import About from './about';
import Home from './home';
import Nav from './nav';
import PublicList from './public_list';
import SecretList from './secret_list';
import Quotes from './quotes';
import SignIn from './sign_in';
import SignUp from './sign_up';

const App = () => (
    <div>
        <Nav/>
        <div className="containe">
            <Route exact path='/' component= {Home}/>
            <Route path='/about' component= {About}/>
            <Route path = '/public-list' component = {PublicList}/>
            <Route path = '/secret-list' component = {SecretList}/>
            <Route path = '/quotes' component = {Quotes}/>
            <Route path = '/sign-in' component = {SignIn}/>
            <Route path = '/sign-up' component = {SignUp}/>
        </div>
    </div>
);

export default App;
