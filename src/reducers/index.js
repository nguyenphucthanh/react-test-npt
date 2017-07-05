import { combineReducers } from 'redux';
import addresses from './addresses';
import formAdd from './formAdd';
import { reducer as formReducer } from 'redux-form';

const addressManagerApp = combineReducers({
    addresses,
    formAdd,
    form: formReducer
});

export default addressManagerApp;