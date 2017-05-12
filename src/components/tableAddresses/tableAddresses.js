import React, {Component, PropTypes} from 'react';
import Button from 'react-bootstrap/lib/Button';
import AddressHelper from '../addressManager/addressHelper';

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

    static propTypes = {
        addresses: PropTypes.array
    };

    static defaultProps = {
        addresses: []
    };

    refresh() {
        this.setState({
            addresses: AddressHelper.getAllAddresses()
        });
    }

    render() {
        return (
            <div>
                <h1>Addresses List</h1>
                <table className="table table-responsive table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Street Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>ZIP</th>
                            <th>Country</th>
                            <th></th>
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
                                        <Button bsStyle="info"><span className="glyphicon glyphicon-pencil"></span></Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}