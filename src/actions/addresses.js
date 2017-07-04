import AddressHelper from '../components/addressManager/addressHelper';

export const RECEIVE_ADDRESSES = 'RECEIVE_ADDRESS';
function receiveAddresses(addressesList) {
    return {
        type: RECEIVE_ADDRESSES,
        addresses: addressesList
    };
}

export function getAddressFromFirebase() {
    return (dispatch) => {
        AddressHelper.getAllAddresses().then(addressesList => {
            dispatch(receiveAddresses(addressesList));
        });
    };
}