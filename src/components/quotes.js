import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMovieQuote} from '../actions';

class Quotes extends Component{

    componentDidMount(){
        this.props.getMovieQuote();
    }

    render(){
        
        return (
            <div>
                <h1 className="center">Movie Quotes!</h1>
                <h3>{this.props.quote}</h3>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        quote: state.quotes.movie
    }
}
export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote,
})(Quotes)