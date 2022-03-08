import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row } from 'react-bootstrap';
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
        label="Emailadresse*"
        name="email"
        formGroupProps={{ className: 'mb-3' }}


        formControlProps={{
          ...register('email', {
            required: 'Emailadresse ist notwendig',
            validate: value => {
              if (isDup) {
                return 'Emailadresse wird schon verwendet';
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
          label="Passwort*"
          name="password"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('password', {
              required: 'Geben Sie ein Passwort ein',
              minLength: {
                value: 2,
                message: 'Das Passwort muss mindestens 2 Stellen haben'
              }
            })
          }}
        />
        <WizardInput
          type="password"
          errors={errors}
          label="Wiederhole Passwort*"
          name="confirmPassword"
          formGroupProps={{ as: Col, sm: 6 }}
          formControlProps={{
            ...register('confirmPassword', {
              required: 'Geben Sie das Passwort erneut ein',
              validate: value =>
                value === watch('password') || 'Die Passwörter stimmen nicht überein'
            })
          }}
        />
      </Row>

      <WizardInput
        type="checkbox"
        errors={errors}
        label={
          <>
            Ich akzeptiere die <a target="_blank" rel="noreferrer" href="https://www.stromrad.com/impressum/agb/"> AGB</a> und{' '} 
            <a target="_blank" rel="noreferrer" href="https://www.stromrad.com/impressum/datenschutzhinweis/"> Datenschutzhinweise</a>
          </>
        }
        name="agreedToTerms"
        formControlProps={{
          ...register('agreedToTerms', {
            required: 'Sie müssen den ABGs und den Datenschutzhinweisen zustimmen'
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
