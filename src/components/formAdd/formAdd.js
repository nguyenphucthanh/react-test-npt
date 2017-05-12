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
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            addressKey: -1,
            address: new AddressModel('', '', '', '', '', '')
        };
    }

    /**
     * this func is to set address object from parent component to this component
     * @param addressKey
     * @param address
     */
    setAddress(addressKey, address) {
        this.setState({ addressKey: addressKey, address: address });
    }

    /**
     * this function is to get address object form this component to parent component
     * @returns {AddressModel}
     */
    getAddress() {
        return this.state.address;
    }

    /**
     * show modal
     */
    show() {
        this.setState({ showModal: true });
    }

    /**
     * hide modal
     */
    hide() {
        this.setState({ showModal: false });
    }

    /**
     * handle object's change to save to state
     * @param e
     * @param addressField
     */
    handleChange(e, addressField) {
        let addr = this.state.address;
        addr[addressField] = e.target.value;
        this.setState({ address: addr });
    }

    /**
     * validate field
     * @param addressField
     * @returns {string}
     */
    getValidationState(addressField) {
        let length = this.state.address[addressField].length;
        return length > 0 ? 'success' : 'error';
    }

    /**
     * Submit result
     */
    submit() {
        this.props.onSubmit(this.state.addressKey, this.state.address);
        this.hide();
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={() => { this.hide(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal" id="form-address" name="form-address" onSubmit={() => { this.submit(); }}>
                        <FormGroup controlId="streetNumber" validationState={this.getValidationState('streetNumber')}>
                            <ControlLabel className="col-sm-3">Street Address</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="123" required
                                             value={this.state.address.streetNumber}
                                             onChange={(e) => { this.handleChange(e, 'streetNumber'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="route" validationState={this.getValidationState('route')}>
                            <ControlLabel className="col-sm-3">Street</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Route Name" required
                                             value={this.state.address.route}
                                             onChange={(e) => { this.handleChange(e, 'route'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="state" validationState={this.getValidationState('state')}>
                            <ControlLabel className="col-sm-3">State</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="State Name" required
                                             value={this.state.address.state}
                                             onChange={(e) => { this.handleChange(e, 'state'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="city" validationState={this.getValidationState('city')}>
                            <ControlLabel className="col-sm-3">City</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="City Name" required
                                             value={this.state.address.city}
                                             onChange={(e) => { this.handleChange(e, 'city'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="postal">
                            <ControlLabel className="col-sm-3">Postal Code</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Postal Code"
                                             value={this.state.address.postal}
                                             onChange={(e) => { this.handleChange(e, 'postal'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                        <FormGroup controlId="country" validationState={this.getValidationState('country')}>
                            <ControlLabel className="col-sm-3">Country</ControlLabel>
                            <div className="col-sm-9">
                                <FormControl type="text" placeholder="Country" required
                                             value={this.state.address.country}
                                             onChange={(e) => { this.handleChange(e, 'country'); }}/>
                                <FormControl.Feedback />
                            </div>
                        </FormGroup>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" type="submit" form="form-address">Submit</Button>
                    <Button bsStyle="default" onClick={() => { this.hide(); }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}