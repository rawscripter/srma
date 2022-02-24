import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { checkUserEmail } from 'services/auth/auth.service';
const AccountForm = ({ register, errors, watch }) => {
  const [isDup, setIsDup] = useState(false);

  const checkEmail = (email) => {
    checkUserEmail(email).then(res => {
      const { data } = res;
      if (data.status === 'FREE') {
        setIsDup(false);
      } else {
        setIsDup(true);
      }

    });
  };

  return (
    <>
      <WizardInput
        type="email"
        errors={errors}
        label="Email*"
        name="email"
        formGroupProps={{ className: 'mb-3' }}


        formControlProps={{
          ...register('email', {
            required: 'Email field is required',
            validate: value => {
              if (isDup) {
                return 'Email is already taken';
              }
              return true;
            }
          }),
          onBlur: (e) => {
            checkEmail(e.target.value);
          }
          // on change


        }}
      />

      <Row className="g-2 mb-3">
        <WizardInput
          type="password"
          errors={errors}
          label="Password*"
          name="password"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('password', {
              required: 'You must specify a password',
              minLength: {
                value: 2,
                message: 'Password must have at least 2 characters'
              }
            })
          }}
        />
        <WizardInput
          type="password"
          errors={errors}
          label="Confirm Password*"
          name="confirmPassword"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('confirmPassword', {
              required: 'Confirm Password field is required',
              validate: value =>
                value === watch('password') || 'The password do not match'
            })
          }}
        />
      </Row>

      <WizardInput
        type="checkbox"
        errors={errors}
        label={
          <>
            I accept the <Link to="#!"> terms</Link> and{' '}
            <Link to="#!"> privacy policy</Link>
          </>
        }
        name="agreedToTerms"
        formControlProps={{
          ...register('agreedToTerms', {
            required: 'You need to agree the terms and privacy policy.'
          })
        }}
      />
    </>
  );
};

AccountForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  watch: PropTypes.func
};

export default AccountForm;
