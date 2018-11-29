import React, {Component} from 'react';
import auth from '../hoc/auth'

class Quotes extends Component{

    render(){
        
        return (
            <div>
                <h1 className="center">Movie Quotes!</h1>
                <h3>Hasta La Vista Baby!</h3>
            </div>
        )
    }

}

export default auth(Quotes)