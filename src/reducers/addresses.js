import {RECEIVE_ADDRESSES, UPDATE_ADDRESS, INSERT_ADDRESS, DELETE_ADDRESS} from '../actions/addresses';
const addresses = (state, action) => {
    switch (action.type) {
        case RECEIVE_ADDRESSES:
            let addressesArray = [];
            for(var key in action.addresses) {
                addressesArray.push(action.addresses[key]);
            }
            return addressesArray;
        case DELETE_ADDRESS:
            return state.filter(address => address.id !== action.address.id);
        case UPDATE_ADDRESS:
            return state.map(address => {
                let newAddress = {};
                Object.assign(newAddress, address);
                if (address.id === action.id) {
                    Object.assign(newAddress, action.address);
                }
                return newAddress;
            });
        case INSERT_ADDRESS:
            return [
                action.address,
                ...state
            ];
        default:
            return state || [];
    }
};

export default addresses;