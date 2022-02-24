import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row } from 'react-bootstrap';

const PersonalForm = ({ register, errors, setValue, user }) => {
  return (
    <>
      <WizardInput
        type="text"
        label="Titel Drdo"
        name="user_title"
        errors={errors}
        formGroupProps={{
          className: 'mb-3'
        }}
        formControlProps={{
          ...register('user_title', {
            required: 'Titel is required',
            value: user.user_title
          }),
          defaultValue: user.user_title
        }}
      />

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Vorname"
          name="user_first_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_first_name', {
              required: 'Vorname is required',
              value: user.user_first_name
            }),
            defaultValue: user.user_first_name
          }}
        />
        <WizardInput
          type="text"
          label="Zweiter Vorname"
          name="user_second_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_second_name', {
              required: 'Zweiter Vorname is required',
              value: user.user_second_name
            }),
            defaultValue: user.user_second_name
          }}
        />
        <WizardInput
          type="text"
          label="Nachname"
          name="user_surename_name"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_surename_name', {
              required: 'Nachname is required',
              value: user.user_surename_name
            }),
            defaultValue: user.user_surename_name
          }}
        />
      </Row>

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Telefonnummer"
          name="user_phone"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_phone', {
              required: 'Telefonnummer is required',
              value: user.user_phone
            }),
            defaultValue: user.user_phone
          }}
        />
        <WizardInput
          type="text"
          label="Handynummer"
          name="user_mobile"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_mobile', {
              required: 'Handynummer is required',
              value: user.user_mobile
            }),
            defaultValue: user.user_mobile
          }}
        />
        <WizardInput
          type="text"
          label="Geschaftliche Telefonnummer"
          name="user_workphone"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_workphone', {
              required: 'Geschaftliche Telefonnummer is required',
              value: user.user_workphone
            }),
            defaultValue: user.user_workphone
          }}

        />
      </Row>

      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Email 1"
          name="user_email1"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_email1', {
              required: 'Email 1 is required',
              value: user.user_email1
            }),
            defaultValue: user.user_email1
          }}
        />
        <WizardInput
          type="text"
          label="Email 2"
          name="user_email2"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_email2', {
              required: 'Email 2 is required',
              value: user.user_email2
            }),
            defaultValue: user.user_email2
          }}
        />
        <WizardInput
          type="text"
          label="Email 3"
          name="user_email3"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('user_email3', {
              required: 'Email 3 is required',
              value: user.user_email3

            }),
            defaultValue: user.user_email3
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
