import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import quotesReducer from './quote_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    quotes: quotesReducer,
    user: userReducer,
})

export default rootReducer;