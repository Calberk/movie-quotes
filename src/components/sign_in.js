import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {userSignIn} from '../actions';
import Input from './input';

class SignIn extends Component{

    handleSignIn= (values)=>{
        console.log('sign in', values);
        this.props.userSignIn(values);
        this.props
    }

    render(){
        const {handleSubmit, signInError} = this.props



        return (
            <div>
                <h1 className="center">SIGN IN</h1>

                <form onSubmit={handleSubmit(this.handleSignIn)}>
                    <div className="row">
                        <Field name='email' label='Email' component={Input}/>
                    </div>
                    <div className="row">
                        <Field name='password' type="password" label='Password' component={Input}/>
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className='btn cyan darken-2'>Sign In</button>
                            <p className="red-text text-darken-2">{signInError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

function validate(values){
    const {email, password} = values;
    const error = {}

    if(!email){
        error.email = 'Please enter your email'
    }
    if(!password){
        error.password = 'Please enter your password'
    }
    return error
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn)

function mapStateToProps (state){
    return{
        signInError: state.user.signInError
    }
}

export default connect(mapStateToProps, {
    userSignIn: userSignIn
}) (SignIn);