import React, {Component} from 'react';
import TableAddresses from '../tableAddresses/tableAddresses';
import AddressHelper from './addressHelper';
import FormAdd from '../formAdd/formAdd';
import MapAdd from '../mapAdd/mapAdd';
import Button from 'react-bootstrap/lib/Button';
import AddressModel from '../../models/address';

// Initialize default DB
AddressHelper.initDefaultDB();

/**
 * Address Manager Component
 */
export default class AddressManager extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Addresses List</h1>
                    <div>
                        <Button bsStyle="primary" onClick={() => { this.addAddress(); }}>Add new Address</Button>
                        <Button bsStyle="primary" onClick={() => { this.openMap(); }}>Add new Address using GMaps</Button>
                    </div>
                </div>

                <TableAddresses ref={(table) => { this.tableAddresses = table; }}
                                onEdit={(key, address) => { this.editAddress(key, address); }}/>
                <FormAdd ref={(formAdd) => { this.formAdd = formAdd; }} onSubmit={(key, address) => { this.submitFormAddress(key, address); }} />
                <MapAdd ref={(map) => { this.mapAdd = map; }} onSubmit={(address) => { this.saveMapAddress(address); }} />
            </div>
        );
    }

    /**
     * show popup to add new address
     */
    addAddress() {
        let newAddress = new AddressModel();
        this.formAdd.setAddress('', newAddress);
        this.formAdd.show();
    }

    /**
     * edit selected address
     * @param key
     * @param address
     */
    editAddress(key, address) {
        this.formAdd.setAddress(key, address);
        this.formAdd.show();
    }

    /**
     * submit address data to local storage
     */
    submitFormAddress(key, address) {
        if (key === '') {
            AddressHelper.addAddress(address).then(() => {
                this.tableAddresses.refresh();
            });
        } else {
            AddressHelper.updateAddress(key, address).then(() => {
                this.tableAddresses.refresh();
            });
        }
    }

    /**
     * Open Map
     */
    openMap() {
        this.mapAdd.show();
    }

    /**
     * save map address
     * @param addr
     */
    saveMapAddress(addr) {
        AddressHelper.addAddress(addr).then(() => {
            this.tableAddresses.refresh();
        });
    }
}