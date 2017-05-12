import React, {Component, PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import AddressHelper from '../addressManager/addressHelper';
import {CSVLink, CSVDownload} from 'react-csv';

/**
 * Addresses Table Component
 * List addresses with edit button
 */
export default class TableAddresses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: this.props.addresses
        };
    }

    /**
     * trigger to refresh table
     */
    refresh() {
        this.setState({
            addresses: AddressHelper.getAllAddresses()
        });
    }

    /**
     * delete address
     */
    deleteAddress(key) {
        if (confirm('Do you really want to delete this address?')) {
            AddressHelper.deleteAddress(key);
            this.refresh();
        }
    }

    render() {
        return (
            <div>
                <h1>Addresses List</h1>
                <div>
                    <CSVLink data={this.state.addresses} className="btn btn-success">Download CSV <span className="glyphicon glyphicon-save" /></CSVLink>
                </div>
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
                                <tr key={key}>
                                    <td>{address.streetNumber}, {address.route}</td>
                                    <td>{address.state}</td>
                                    <td>{address.city}</td>
                                    <td>{address.postal}</td>
                                    <td>{address.country}</td>
                                    <td>
                                        <Button bsStyle="info" onClick={() => { this.props.onEdit(key, address); }}><span className="glyphicon glyphicon-pencil" /></Button>
                                        <Button bsStyle="danger" onClick={() => { this.deleteAddress(key); }}><span className="glyphicon glyphicon-trash" /></Button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
                <div>
                    <CSVLink data={this.state.addresses} className="btn btn-success">Download CSV <span className="glyphicon glyphicon-save" /></CSVLink>
                </div>
            </div>
        );
    }
}