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

    /**
     * get all addresses from local storage
     */
    static getAllAddresses() {
        return JSON.parse(window.localStorage.getItem('REACT_TEST_ADDRESSES'));
    }

    /**
     * save array of addresses to local storage
     * @param allAddresses
     */
    static saveAllAddress(allAddresses) {
        window.localStorage.setItem('REACT_TEST_ADDRESSES', JSON.stringify(allAddresses));
    }

    /**
     * add an address to local storage
     * @param newAddress
     */
    static addAddress(newAddress) {
        let allAddresses = this.getAllAddresses();
        if (!allAddresses) {
            allAddresses = [];
        }
        allAddresses.push(newAddress);

        this.saveAllAddress(allAddresses);
    }

    /**
     * delete an address from local storage
     * @param key
     */
    static deleteAddress(key) {
        let addresses = this.getAllAddresses();
        addresses.splice(key, 1);

        this.saveAllAddress(addresses);
    }

    /**
     * update address
     * @param key
     * @param address
     */
    static updateAddress(key, address) {
        let addresses = this.getAllAddresses();
        addresses[key] = address;

        this.saveAllAddress(addresses);
    }
}