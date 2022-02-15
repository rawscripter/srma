import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AuthProvider } from 'services/auth/auth.context';

const LoginForm = ({ hasLabel, layout }) => {

  const { isLoggedIn, onLogin, isLoading, error } = useContext(AuthProvider);

  // State
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  let history = useHistory();

  // Handler
  const handleSubmit = e => {
    e.preventDefault();
    onLogin(formData.email, formData.password);
  };


  const handleFieldChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      toast.success(`Login successful`);
      // redirect to dashboard
      history.push('/dashboard');
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Email</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Email' : ''}
            value={formData.email}
            name="email"
            onChange={handleFieldChange}
            type="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          {hasLabel && <Form.Label>Passwort</Form.Label>}
          <Form.Control
            placeholder={!hasLabel ? 'Passwort' : ''}
            value={formData.password}
            name="password"
            onChange={handleFieldChange}
            type="password"
          />
        </Form.Group>

        <Row className="justify-content-between align-items-center">
          <Col xs="auto">
            <Form.Check type="checkbox" id="rememberMe">
              <Form.Check.Input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={e =>
                  setFormData({
                    ...formData,
                    remember: e.target.checked
                  })
                }
              />
              <Form.Check.Label className="ms-2 mb-0">
                Speichern?
              </Form.Check.Label>
            </Form.Check>
          </Col>

          <Col xs="auto">
            <Link
              className="fs--1 mb-0"
              to={`/authentication/${layout}/forgot-password`}
            >
              Passwort vergessen?
            </Link>
          </Col>
        </Row>

        <Form.Group>
          <Button
            type="submit"
            color="primary"
            className="mt-3 w-100"
            disabled={!formData.email || !formData.password}
          >
            {isLoading ? <span className="spinner-border spinner-border-sm ml-2" /> : 'Einloggen'}
          </Button>
        </Form.Group>
      </Form>


      <div className="mt-4 text-danger">
        {error}
      </div>
    </>
  );
};

LoginForm.propTypes = {
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

LoginForm.defaultProps = {
  layout: 'simple',
  hasLabel: false
};

export default LoginForm;
