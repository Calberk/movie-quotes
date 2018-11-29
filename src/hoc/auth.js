import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(WrappedComponent){   //parameter must start with a capital letter
    class Auth extends Component{

        componentDidMount(){
            console.log('auth hoc', this.props)
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            if(!this.props.auth){
                this.props.history.push('/sign-in')
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return{
            auth: state.user.auth,
    }
}

    return connect(mapStateToProps)(Auth);
}
