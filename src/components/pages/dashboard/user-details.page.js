import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Card, Button, Spinner } from 'react-bootstrap';
import { UserProfileProvider } from 'services/profile/userProfile.context';

import { useForm } from 'react-hook-form';
import PersonalForm from './parts/PersonalForm';
import { toast } from 'react-toastify';


const UserDetailsPage = () => {
  const { userDetails, isLoading, loadUserDetails, saveUserDetails, successMessage, error, setUserDetails } = useContext(UserProfileProvider);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();


  useEffect(() => {
    loadUserDetails();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
    // eslint-disable-next-line
  }, [successMessage]);

  useEffect(() => {
    if (error) {
      toast.success(error);
    }
    // eslint-disable-next-line
  }, [error]);

  const onSubmitData = data => {
    // remove user_ prefix object key from data
    const userData = { ...userDetails, ...data };
    saveUserDetails(userData);
    setUserDetails(userData);
  };
  const onError = () => {
  };

  return (
    <>
      <Card
        className="mt-5"
        as={Form}
        noValidate
        onSubmit={handleSubmit(onSubmitData, onError)}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '50px',
          boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)',
          padding: '30px',
          margin: '0px'
        }}
      >

        {
          isLoading && (<Col>
            <Spinner
              className="position-absolute start-50"
              animation="grow"
            />
          </Col>
          )
        }

        {!isLoading && (
          <Card.Body>
            <PersonalForm
              register={register}
              errors={errors}
              user={userDetails}
              setValue={setValue}
              watch={watch}
            />

            <Row>
              <Col lg={4} className="m-auto mt-3">
                <Form.Group>
                  <Button type="submit" color="primary" className="mt-3 w-100">
                    Daten speichern
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        )}
      </Card>
    </>
  );
};

export default UserDetailsPage;
