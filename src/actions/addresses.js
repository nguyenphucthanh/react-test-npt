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

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';

function updateAddress(id, address) {
    return {
        type: UPDATE_ADDRESS,
        id,
        address
    };
}

export function updateAddressToFireBase(id, address) {
    return (dispatch) => {
        AddressHelper.updateAddress(id, address).then(() => {
            dispatch(updateAddress(id, address));
        });
    };
}

export const INSERT_ADDRESS = 'INSERT_ADDRESS';

function insertAddress(address) {
    return {
        type: INSERT_ADDRESS,
        address
    };
}

export function insertAddressToFirebase(address) {
    return (dispatch) => {
        AddressHelper.addAddress(address).then((result) => {
            console.log('insertAddressToFirebase', result);
            dispatch(insertAddress(address));
        });
    };
}

export const DELETE_ADDRESS = 'DELETE_ADDRESS';

function deleteAddress(address) {
    return {
        type: DELETE_ADDRESS,
        address
    };
}

export function deleteAddressFromFirebase(address) {
    return (dispatch) => {
        AddressHelper.deleteAddress(address.id).then(() => {
            dispatch(deleteAddress(address));
        });
    };
}
