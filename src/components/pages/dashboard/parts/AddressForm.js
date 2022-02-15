import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddressForm = ({ register, errors, setValue, user }) => {
  return (
    <>
      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Straße"
          name="street"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('street', {
              required: 'Straße is required',
              value: user.street,
            }),
            defaultValue: user.street
          }}
        />
        <WizardInput
          type="text"
          label="Hausnummer "
          name="street_number"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('street_number', {
              required: 'Hausnummer is required',
              value: user.street_number
            }),
            defaultValue: user.street_number
          }}
        />
        <WizardInput
          type="text"
          label="Geschoss"
          name="floor"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('floor', {
              required: 'Geschoss is required',
              value: user.floor
            }),
            defaultValue: user.floor
          }}
        />
      </Row>
      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Postleitzahl"
          name="postal_code"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('postal_code', {
              required: 'Postleitzahl is required',
              value: user.postal_code
            }),
            defaultValue: user.postal_code
          }}
        />
        <WizardInput
          type="text"
          label="Stadt "
          name="city"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('city', {
              required: 'Stadt is required',
              value: user.city
            }),
            defaultValue: user.city
          }}
        />
        <WizardInput
          type="text"
          label="Bundesland"
          name="country"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('country', {
              required: 'Bundesland is required',
              value: user.country
            }),
            defaultValue: user.country
          }}
        />
      </Row>

      <WizardInput
        type="textarea"
        label="Kommentar"
        name="comment"
        errors={errors}
        formControlProps={{
          ...register('comment', {
            required: 'Kommentar is required',
            value: user.comment
          }),
          defaultValue: user.comment
        }}
      />
    </>
  );
};

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default AddressForm;
