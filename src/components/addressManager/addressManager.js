import React, {Component} from 'react';
import TableAddresses from '../tableAddresses/tableAddresses';
import AddressHelper from './addressHelper';
import FormAdd from '../formAdd/formAdd';
import Button from 'react-bootstrap/lib/Button';
import AddressModel from '../../models/address';

// Initialize default DB
AddressHelper.initDefaultDB();

/**
 * Address Manager Component
 */
export default class AddressManager extends Component {
    formAdd = {};
    tableAddresses = {};

    constructor(props) {
        super(props);
    }

    render() {
        let addresses = this.getAddresses();
        return (
            <div>
                <TableAddresses addresses={addresses} ref={(table) => { this.tableAddresses = table; }}/>
                <div>
                    <Button bsStyle="primary" onClick={() => { this.addAddress(); }}>Add new Address</Button>
                </div>
                <FormAdd ref={(formAdd) => { this.formAdd = formAdd; }} onSubmit={() => { this.submitFormAddress() }} />
            </div>
        );
    }

    /**
     * get all addresses from local storage
     */
    getAddresses() {
        return AddressHelper.getAllAddresses();
    }

    /**
     * show popup to add new address
     */
    addAddress() {
        let newAddress = new AddressModel('123', '', '', '', '', '');
        this.formAdd.setAddress(-1, newAddress);
        this.formAdd.show();
    }

    /**
     * submit address data to local storage
     */
    submitFormAddress() {
        AddressHelper.addAddress(this.formAdd.getAddress());
        this.tableAddresses.refresh();
    }
}