import AddressModel from '../../models/address';

export default class AddressHelper {
    /**
     * Initialize some default addresses
     * @type {[*]}
     */
    static initDefaultDB() {
        let initialAddress = [
            new AddressModel('194', 'Đinh Bộ Lĩnh', 'HCM', 'HCM', '', 'Vietnam'),
            new AddressModel('204', 'Bạch Đằng', 'HCM', 'HCM', '', 'Vietnam')
        ];

        let storedAddress = window.localStorage.getItem('REACT_TEST_ADDRESSES');

        if (!storedAddress) {
            window.localStorage.setItem('REACT_TEST_ADDRESSES', JSON.stringify(initialAddress));
        }
    }

    static getAllAddresses() {
        return JSON.parse(window.localStorage.getItem('REACT_TEST_ADDRESSES'));
    }

    static saveAllAddress(allAddresses) {
        window.localStorage.setItem('REACT_TEST_ADDRESSES', JSON.stringify(allAddresses));
    }

    static addAddress(newAddress) {
        let allAddresses = this.getAllAddresses();
        if (!allAddresses) {
            allAddresses = [];
        }
        allAddresses.push(newAddress);

        this.saveAllAddress(allAddresses);
    }
}