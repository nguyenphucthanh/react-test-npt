import React, { Component, PropTypes } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import AddressModel from '../../models/address';
import FormAddFormComponent from './formAddFormComponent';

/**
 * Form Add Component
 * Use a form to add address model
 */
export default class FormAddComponent extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * this func is to set address object from parent component to this component
     * @param addressKey
     * @param address
     */
    // setAddress(addressKey, address) {
    //     this.setState({ addressKey: addressKey, address: address });
    // }

    /**
     * this function is to get address object form this component to parent component
     * @returns {AddressModel}
     */
    getAddress() {
        return this.props.address;
    }

    /**
     * handle object's change to save to state
     * @param e
     * @param addressField
     */
    handleChange(e, addressField) {
        this.props.address[addressField] = e.target.value;
    }

    /**
     * Submit result
     */
    submit(updatedAddress) {
        console.log(updatedAddress);
        this.props.onSubmit(this.props.addressKey, updatedAddress);
        this.props.onHide();
    }

    render() {
        let form = (<div></div>);
        if (this.props.address) {
            form = (<FormAddFormComponent onSubmit={(values) => { this.submit(values); }} address={this.props.address} />);
        }
        return (
            <Modal show={this.props.showModal} onHide={() => { this.props.onHide(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {form}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" type="submit" form="form-address">Submit</Button>
                    <Button bsStyle="default" onClick={() => { this.props.onHide(); }}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}