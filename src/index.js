import React from 'react';
import ReactDOM from 'react-dom';
import AddressManager from './components/addressManager/addressManager';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import addressManagerApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import {getAddressFromFirebase} from './actions/addresses';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

const store = createStore(
    addressManagerApp,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ));

ReactDOM.render(
    <Provider store={store}>
        <AddressManager />
    </Provider>,
    document.getElementById('app')
);

store.dispatch(getAddressFromFirebase());
