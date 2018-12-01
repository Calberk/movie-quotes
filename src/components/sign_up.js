import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form'
import Input from './input';
import {userSignUp} from '../actions';
import {connect} from 'react-redux';

class SignUp extends Component{

    handleSignUp = (values) => {
        console.log('values', values)
        this.props.userSignUp(values)
    }

    render(){
        const {handleSubmit, signUpError} = this.props
        return (
            <div>
                <h1 className="center">SIGN UP</h1>

                <form onSubmit= {handleSubmit(this.handleSignUp)}>
                    <div className="row">
                            <Field name='email' label='Email' component={Input}/>       
                    </div>
                    
                    <div className="row">                       
                            <Field  size='s6' type='password' name='password' label='Password' component={Input}/>                       
                            <Field  size='s6' type='password' name='confirmPassword' label='Confirm Password' component={Input}/>                    
                    </div>
                    
                    
                    <div className="row">
                        <div className="col s12 right-align">
                        <button className='btn cyan darken-3'>Sign Up</button>
                        <p className="red-text text-darken-2">{signUpError}</p>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}

function validate(values){
    const {confirmPassword, email, password} = values;
    const error = {};

    if(!email){
        error.email = 'Please enter a valid email'
    }
    if(!password){
        error.password = 'Please enter a password'
    }
    if(password !== confirmPassword){
        error.confirmPassword = 'Password does not match';
    }
    return error;
}

SignUp = reduxForm({
    validate: validate,
    form: 'sign-up'
})(SignUp);

function mapStateToProps(state){
    return{
        signUpError: state.user.signUpError
    }
}

export default connect (mapStateToProps, {
    userSignUp: userSignUp 
})(SignUp)