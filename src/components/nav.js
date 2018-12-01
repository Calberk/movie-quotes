import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {userSignOut} from '../actions'
import { connect } from 'react-redux';

class Nav extends Component {

    renderLinks(){
        const {auth, userSignOut} = this.props;

        if(auth){                   
            return (                            //when you are logged in/authorized these li's will show up in renderLinks
                <Fragment>
                    <li>
                        <Link to='/secret-list'>Secret List</Link>
                    </li>
                    <li>
                        <Link to='/quotes'>Quotes</Link>
                    </li>
                    <li>
                        <button onClick={userSignOut} className='purple btn'>Log Out</button>
                    </li>
                </Fragment>
                    
            );
        }

        
        return (                                //when you are not authorized these li's will show up in renderLinks
            
            <Fragment>
                <li>
                    <Link to='/sign-in'>Sign In</Link>
                </li>
                <li>
                    <Link to='/sign-up'>Sign Up</Link>
                </li>

            </Fragment>
        
        );
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
                        {/* <li>
                            <Link to='/secret-list'>Secret List</Link>     TOOK OUT THIS SECTION SO IT ONLY SHOWS WHEN A USER IS AUTHORIZED
                        </li>
                        <li>
                            <Link to='/quotes'>Quotes</Link>
                        </li> */}
                            {this.renderLinks()}
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

export default connect(mapStateToProps, {       //can just put userSignIn and userSignOut or anything to the key like signIn: userSignIn
    userSignOut: userSignOut,
}) (Nav);