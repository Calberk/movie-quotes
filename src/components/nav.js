import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {userSignIn, userSignOut} from '../actions'
import { connect } from 'react-redux';

class Nav extends Component {

    renderLinks(){
        const {auth, userSignIn, userSignOut} = this.props;

        if(auth){
            return <button onClick={userSignOut} className='purple btn'>Log Out</button>
        }
        return <button onClick={userSignIn} className='btn cyan darken-4'>Sign In</button>
    }

    render(){
        const navStyles = {
            padding: '0 8px',
        }

        console.log(this.props.auth)
        return (
            <nav style={navStyles} className="cyan darken-3">
                <div className="nav-wrapper">
                    <Link to ='/' className='brand-logo'>Movie Quotes!</Link>
                    <ul className="right">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/public-list'>Public List</Link>
                        </li>
                        <li>
                            <Link to='/secret-list'>Secret List</Link>
                        </li>
                        <li>
                            <Link to='/quotes'>Quotes</Link>
                        </li>
                        <li>
                            {this.renderLinks()}
                        </li>
                        <li>
                            <Link to='/sign-up'>Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    userSignIn: userSignIn,         //can just put userSignIn and userSignOut or anything to the key like signIn: userSignIn
    userSignOut: userSignOut,
}) (Nav);