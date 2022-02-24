import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row } from 'react-bootstrap';

const AddressForm = ({ register, errors, setValue }) => {
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
            })
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
            })
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
            })
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
            })
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
            })
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
            })
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
          })
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
