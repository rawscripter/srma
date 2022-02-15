import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from './lottie/celebration.json';
import { AuthWizardContext } from 'context/Context';
import { AuthProvider } from 'services/auth/auth.context';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
const Success = ({ reset }) => {
  const { setStep, setUser } = useContext(AuthWizardContext);
  const { registrationFormData, onRegister } = useContext(AuthProvider);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const history = useHistory();

  const registerUser = () => {
    onRegister(registrationFormData)
      .then((res) => {
        setStep(1);
        setUser({});
        reset();
        toast.success('Registration Successful');
        history.push('/auth/login');
      }).catch((err) => {
        toast.error("Something went wrong. Please try again later");
      });
  };

  return (
    <>
      <Row>
        <Col className="text-center">
          <div className="wizard-lottie-wrapper">
            <div className="wizard-lottie mx-auto">
              <Lottie options={defaultOptions} />
            </div>
          </div>
          <h4 className="mb-1">Your account is all set!</h4>
          <p className="fs-0">Now you can access to your account</p>
          <Button color="primary" className="px-5 my-3" onClick={registerUser}>
            Send Registration
          </Button>
        </Col>
      </Row>
    </>
  );
};

Success.propTypes = {
  reset: PropTypes.func.isRequired
};

export default Success;
