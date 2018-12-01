import types from './types';
import axios from 'axios';

export const getMovieQuote = ()=> async dispatch =>{     //es6 way to write same thing as userSignIn below

    
    const axiosConfig = {
        headers: {
            authorization: localStorage.getItem('token')
        }
    }

    const resp = await axios.get('http://api.reactprototypes.com', axiosConfig);
    console.log('movie response', resp)

    dispatch({
        type: types.GET_QUOTE,
        quote: resp.data.message
    })
}

export function userSignIn(user){
    console.log('user signed in')
    return async function(dispatch){
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signin', user);

            localStorage.setItem('token', resp.data.token)

        dispatch({
            type: types.SIGN_IN,
        })
    } 
    catch(err){
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid email and/or password',
        })
    }
}
}

export function userSignOut(){

    localStorage.removeItem('token');

    return{
        type: types.SIGN_OUT
    }
}

export function userSignUp(user){
    return async function(dispatch){
        
        try{
        const resp = await axios.post('http://api.reactprototypes.com/signup', user);

        localStorage.setItem('token', response.data.token);

        dispatch({
            type: types.SIGN_UP,
        })
       
        }catch(err){
            dispatch({
                type:types.SIGN_UP_ERROR,
                error: 'Email already in use'
            })
        }
    }
}