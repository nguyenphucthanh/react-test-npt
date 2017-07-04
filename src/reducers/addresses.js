import {RECEIVE_ADDRESSES} from '../actions/addresses';
const addresses = (state, action) => {
    switch (action.type) {
        case RECEIVE_ADDRESSES:
            console.log('old state', state);
            let addressesArray = [];
            for(var key in action.addresses) {
                addressesArray.push(action.addresses[key]);
            }
            console.log('new state', addressesArray);
            return addressesArray;
        default:
            return state || [];
    }
};

export default addresses;