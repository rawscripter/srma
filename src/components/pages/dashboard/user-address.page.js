/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AddressForm from './parts/AddressForm';
import { UserProfileProvider } from 'services/profile/userProfile.context';



const UserAddressPage = () => {
    const {
        isLoading,
        loadUserAddress,
        userAddress,
        setUserAddress
    } = useContext(UserProfileProvider);

    console.log('userAddress', userAddress);

    useEffect(() => {
        loadUserAddress();
        // eslint-disable-next-line
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
        clearErrors,
    } = useForm();


    const onSubmitData = data => {
        setUserAddress({ ...userAddress, ...data });
    };
    const onError = () => {
        // clearErrors();
    };



    return (
        <>
            <Card
                as={Form}
                noValidate
                onSubmit={handleSubmit(onSubmitData, onError)}
                className="mt-5"
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
                <Card.Body>
                    <AddressForm
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        user={userAddress}
                        watch={watch}
                    />
                    <Row>
                        <Col lg={4} className="m-auto mt-2">
                            <Form.Group>
                                <Button type="submit" color="primary" className="mt-3 w-100">
                                    Daten speichern
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default UserAddressPage;
