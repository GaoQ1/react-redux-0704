import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
// import promise from 'redux-promise';
//add gaoq
import promise from 'redux-promise-middleware';
import axios from 'axios';

import allReducers from './reducers';
import App from './components/app';

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(promise(), thunk, logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
