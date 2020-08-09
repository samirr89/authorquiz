import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
   // const composeEnhancers =  window__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for redux dev tools;
    return createStore(rootReducer, initialState, applyMiddleware(reduxImmutableStateInvariant()))
}