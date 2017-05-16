import React, {Component, PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import AddressHelper from '../addressManager/addressHelper';
import {CSVLink, CSVDownload} from 'react-csv';
import * as _ from 'lodash';

/**
 * Addresses Table Component
 * List addresses with edit button
 */
export default class TableAddresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: []
        };
    }

    /**
     * trigger to refresh table
     */
    refresh() {
        AddressHelper.getAllAddresses().then((result) => {
            let addresses = [];
            for (let key in result) {
                addresses.push(result[key]);
            }
            this.setState({
                addresses: addresses
            });
        });
    }

    /**
     * delete address
     */
    deleteAddress(key) {
        if (confirm('Do you really want to delete this address?')) {
            AddressHelper.deleteAddress(key).then(() => {
                this.refresh();
            });
        }
    }

    componentDidMount() {
        this.refresh();
    }

    render() {
        return (
            <div>
                <table className="table table-responsive table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Street Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>ZIP</th>
                            <th>Country</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.addresses.map((address, key) => {
                            return(
                                <tr key={address.id}>
                                    <td>{address.streetNumber}, {address.route}</td>
                                    <td>{address.state}</td>
                                    <td>{address.city}</td>
                                    <td>{address.postal}</td>
                                    <td>{address.country}</td>
                                    <td>
                                        <Button bsStyle="info" onClick={() => { this.props.onEdit(address.id, address); }}><span className="glyphicon glyphicon-pencil" /></Button>
                                        <Button bsStyle="danger" onClick={() => { this.deleteAddress(address.id); }}><span className="glyphicon glyphicon-trash" /></Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={6}>
                                <CSVLink data={this.state.addresses} className="btn btn-success">Download CSV <span className="glyphicon glyphicon-save" /></CSVLink>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}