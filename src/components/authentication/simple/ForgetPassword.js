import React from 'react';
import ForgetPasswordForm from 'components/authentication/ForgetPasswordForm';

const ForgetPassword = () => {
  return (
    <div className="text-center">
      <h5 className="mb-0"> Passwort vergessen?</h5>
      <small>Tragen Sie ihre Email ein und wir senden ihnen einen Link.</small>
      <ForgetPasswordForm />
    </div>
  );
};

export default ForgetPassword;
