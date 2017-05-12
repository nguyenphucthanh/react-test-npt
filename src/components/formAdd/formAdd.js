import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import AddressModel from '../../models/address';

/**
 * Form Add Component
 * Use a form to add address model
 */
export default class FormAdd extends Component {
    static defaultProps = {
        onSubmit: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            addressKey: -1,
            address: new AddressModel('', '', '', '', '', '')
        }
    }

    setAddress(addressKey, address) {
        this.setState({ addressKey: addressKey, address: address });
    }

    getAddress() {
        return this.state.address;
    }

    show() {
        this.setState({ showModal: true });
    }

    hide() {
        this.setState({ showModal: false });
    }

    handleChange(e, addressField) {
        let addr = this.state.address;
        addr[addressField] = e.target.value;
        this.setState({ address: addr });
    }

    getValidationState(addressField) {
        let length = this.state.address[addressField].length;
        return length > 0 ? 'success' : 'error';
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={() => { this.hide() }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal">
                        <FormGroup controlId="streetNumber" validationState={this.getValidationState('streetNumber')}>
                            <ControlLabel className="col-sm-3">Street Address</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="123"
                                             value={this.state.address.streetNumber}
                                             onChange={(e) => { this.handleChange(e, 'streetNumber') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="route" validationState={this.getValidationState('route')}>
                            <ControlLabel className="col-sm-3">Street</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Route Name"
                                             value={this.state.address.route}
                                             onChange={(e) => { this.handleChange(e, 'route') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="state" validationState={this.getValidationState('state')}>
                            <ControlLabel className="col-sm-3">State</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="State Name"
                                             value={this.state.address.state}
                                             onChange={(e) => { this.handleChange(e, 'state') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="city" validationState={this.getValidationState('city')}>
                            <ControlLabel className="col-sm-3">City</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="City Name"
                                             value={this.state.address.city}
                                             onChange={(e) => { this.handleChange(e, 'city') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="postal" validationState={this.getValidationState('postal')}>
                            <ControlLabel className="col-sm-3">Postal Code</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Postal Code"
                                             value={this.state.address.postal}
                                             onChange={(e) => { this.handleChange(e, 'postal') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="country" validationState={this.getValidationState('country')}>
                            <ControlLabel className="col-sm-3">Country</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Country"
                                             value={this.state.address.country}
                                             onChange={(e) => { this.handleChange(e, 'country') }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={() => { this.props.onSubmit(); this.hide(); }}>Submit</Button>
                    <Button bsStyle="default" onClick={() => { this.hide(); }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}