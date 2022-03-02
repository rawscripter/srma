import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Section from 'components/common/Section';
import Logo from 'components/common/Logo';
import Wizard from 'components/wizard/Wizard';
import { AuthProvider } from 'services/auth/auth.context';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const { isLoggedIn } = useContext(AuthProvider);
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      // redirect to dashboard
      history.push('/');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);


  return (
    <Section className="py-0">
      <Row className="justify-content-center pt-6">
        <Col sm={10} lg={7} className="col-xxl-8">
          <Logo width={45} textClass="fs-4" />
          <Wizard validation={true} />
        </Col>
      </Row>
    </Section>
  );
};

export default RegisterPage;
