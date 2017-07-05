import React, { Component, PropTypes } from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import { Field, reduxForm } from "redux-form";
import FieldFormControl from "./fieldFormComponent";

let FormAddFormComponent = props => {
  let { handleSubmit, address } = props;

  return (
    <form
      className=""
      id="form-address"
      name="form-address"
      onSubmit={handleSubmit}
    >
      <Field component="input" type="hidden" name="id" value={address.id} />
      <Field
        name="streetNumber"
        component={FieldFormControl}
        type="text"
        placeholder="123"
        required
      >
        Street Address
      </Field>
      <Field
        name="route"
        component={FieldFormControl}
        type="text"
        placeholder="Route Name"
        required
      >
        Street
      </Field>
      <Field
        name="state"
        component={FieldFormControl}
        type="text"
        placeholder="State Name"
        required
      >
        State
      </Field>
      <Field
        name="city"
        component={FieldFormControl}
        type="text"
        placeholder="City Name"
        required
      >
        City
      </Field>
      <Field
        name="postal"
        component={FieldFormControl}
        type="text"
        placeholder="Postal Code"
      >
        Postal Code
      </Field>
      <Field
        name="country"
        component={FieldFormControl}
        type="text"
        placeholder="Country"
        required
      >
        Country
      </Field>
    </form>
  );
};

FormAddFormComponent = new reduxForm({
  form: "form-address"
})(FormAddFormComponent);

export default FormAddFormComponent;
