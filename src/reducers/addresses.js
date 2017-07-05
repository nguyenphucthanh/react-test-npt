import {RECEIVE_ADDRESSES, UPDATE_ADDRESS, INSERT_ADDRESS} from '../actions/addresses';
const addresses = (state, action) => {
    switch (action.type) {
        case RECEIVE_ADDRESSES:
            let addressesArray = [];
            for(var key in action.addresses) {
                addressesArray.push(action.addresses[key]);
            }
            return addressesArray;
        default:
            return state || [];
    }
};

export default addresses;