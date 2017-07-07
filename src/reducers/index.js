import { combineReducers } from 'redux';
import addresses from './addresses';
import formAdd from './formAdd';
import mapAdd from './mapAdd';
import { reducer as formReducer } from 'redux-form';

const addressManagerApp = combineReducers({
    addresses,
    formAdd,
    mapAdd,
    form: formReducer
});

export default addressManagerApp;