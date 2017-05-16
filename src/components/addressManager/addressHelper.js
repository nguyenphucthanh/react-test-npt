import AddressModel from '../../models/address';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUNspIj3hbsIr6Izakhlpq3KSUf2pBLE4",
    authDomain: "react-test-addrman.firebaseapp.com",
    databaseURL: "https://react-test-addrman.firebaseio.com",
    projectId: "react-test-addrman",
    storageBucket: "react-test-addrman.appspot.com",
    messagingSenderId: "1025583236501"
};

export default class AddressHelper {
    constructor() {
        this.defaultDatabase = {};
    }
    /**
     * Initialize some default addresses
     * @type {[*]}
     */
    static initDefaultDB() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().signInAnonymously().catch(function(error) {
            console.error(error);
        });

        this.defaultDatabase = firebase.database();
    }

    /**
     * get all addresses from database
     */
    static getAllAddresses() {
        return new Promise((resolve, reject) => {
            this.defaultDatabase.ref('addresses/').once('value').then((snapshot) => {
                resolve(snapshot.val());
            }).catch((error) => {
                reject(error);
            });
        });
    }

    /**
     * add an address to database
     * @param newAddress
     */
    static addAddress(newAddress) {
        let addressRef = this.defaultDatabase.ref('addresses').push();
        newAddress.id = addressRef.key;
        return addressRef.set(newAddress);
    }

    /**
     * delete an address from database
     * @param key
     */
    static deleteAddress(key) {
        return this.defaultDatabase.ref('addresses/' + key).remove();
    }

    /**
     * update address
     * @param key
     * @param address
     */
    static updateAddress(key, address) {
        let update = {};
        update['addresses/' + key] = address;

        return this.defaultDatabase.ref().update(update);
    }
}