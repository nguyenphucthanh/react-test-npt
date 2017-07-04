import { combineReducers } from 'redux';
import addresses from './addresses';

const addressManagerApp = combineReducers({
    addresses
});

export default addressManagerApp;