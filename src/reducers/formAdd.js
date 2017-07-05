import { HIDE_FORM, PASS_ADDRESS_FORM, NEW_ADDRESS_FORM } from '../actions/formAdd';

const formAdd = (state, action) => {
    switch(action.type) {
        case HIDE_FORM:
            return {
                showModal: false
            };
        case PASS_ADDRESS_FORM:
            return {
                id: action.id,
                address: action.address,
                showModal: true
            };
        case NEW_ADDRESS_FORM: 
            return {
                id: action.id,
                address: action.address,
                showModal: true
            };
        default:
            return state || {
                id: -1,
                address: null,
                showModal: false
            };
    }
};

export default formAdd;