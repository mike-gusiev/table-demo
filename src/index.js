import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux';

import App from './App';
import {usersReducer, modeReducer, termReducer} from './ducks/index'

const allReducers = combineReducers({
    termData: termReducer,
    mode: modeReducer,
    people: usersReducer
});


const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
