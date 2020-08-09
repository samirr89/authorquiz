import { combineReducers } from 'redux';
import author from './authorReducer'
const rootReducer = combineReducers({
    author
});

export default rootReducer;