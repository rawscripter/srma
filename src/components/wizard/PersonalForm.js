import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row } from 'react-bootstrap';

const PersonalForm = ({ register, errors, setValue }) => {
  return (
    <>
      <WizardInput
        type="text"
        label="Titel Drdo"
        name="title"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          ...register('title', {
            required: 'Titel is required',
          })
        }}
      />

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Vorname"
          name="first_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('first_name', {
              required: 'Vorname is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Zweiter Vorname"
          name="second_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('second_name', {
              required: 'Zweiter Vorname is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Nachname"
          name="surename_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('surename_name', {
              required: 'Nachname is required',
            })
          }}
        />
      </Row>

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Telefonnummer"
          name="phone"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('phone', {
              required: 'Telefonnummer is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Handynummer"
          name="mobile"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('mobile', {
              required: 'Handynummer is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Geschaftliche Telefonnummer"
          name="workphone"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('workphone', {
              required: 'Geschaftliche Telefonnummer is required',
            })
          }}

        />
      </Row>

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Email 1"
          name="email1"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('email1', {
              required: 'Email 1 is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Email 2"
          name="email2"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('email2', {
              required: 'Email 2 is required',
            })
          }}
        />
        <WizardInput
          type="text"
          label="Email 3"
          name="email3"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('email3', {
              required: 'Email 3 is required',
            })
          }}
        />
      </Row>
    </>
  );
};

PersonalForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default PersonalForm;
