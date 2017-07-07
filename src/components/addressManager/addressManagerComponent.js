import React, {Component} from 'react';
import TableAddresses from '../tableAddresses/tableAddresses';
import AddressHelper from './addressHelper';
import FormAdd from '../formAdd/formAdd';
import MapAdd from '../mapAdd/mapAdd';
import Button from 'react-bootstrap/lib/Button';
import AddressModel from '../../models/address';
import {passAddressForm} from '../../actions/addresses';

// Initialize default DB
AddressHelper.initDefaultDB();

/**
 * Address Manager Component
 */
export default class AddressManagerComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h1>Addresses List</h1>
                    <div>
                        <Button bsStyle="primary" onClick={() => { this.props.onClickNew(); }}>Add new Address</Button>
                        <Button bsStyle="primary" onClick={() => { this.props.onClickOpenMap(); }}>Add new Address using GMaps</Button>
                    </div>
                </div>

                <TableAddresses ref={(table) => { this.tableAddresses = table; }} />
                <FormAdd ref={(formAdd) => { this.formAdd = formAdd; }} />
                <MapAdd ref={(map) => { this.mapAdd = map; }} onSubmit={(address) => { this.saveMapAddress(address); }} />
            </div>
        );
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