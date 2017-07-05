import AddressModel from '../models/address';
export const HIDE_FORM = 'HIDE_FORM';
export function hideForm() {
    return {
        type: HIDE_FORM
    };
}

export const PASS_ADDRESS_FORM = 'PASS_ADDRESS_FORM';

export function passAddressForm(id, address) {
    return {
        type: PASS_ADDRESS_FORM,
        id,
        address
    };
}

export const NEW_ADDRESS_FORM = 'NEW_ADDRESS_FORM';
export function newAddressForm() {
    return {
        type: NEW_ADDRESS_FORM,
        id: 0,
        address: new AddressModel('', '', '', '', '', '', '')
    };
}