import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Card, Button, Spinner } from 'react-bootstrap';
import { UserProfileProvider } from 'services/profile/userProfile.context';
import { useForm } from 'react-hook-form';
import UserBikeForm from './parts/UserBikeForm';
import { toast } from 'react-toastify';

const UserBikePage = () => {
    const { isLoading, userBikes, loadUserBikes, userBikeDetails, saveUserBike,
        successMessage, error } = useContext(UserProfileProvider);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue
    } = useForm();

    useEffect(() => {
        loadUserBikes();
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
        let bikeInfo = { ...userBikeDetails, ...data };
        saveUserBike(bikeInfo);
    };
    const onError = (data) => {
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
                        <UserBikeForm
                            register={register}
                            errors={errors}
                            bikes={userBikes}
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

export default UserBikePage;
