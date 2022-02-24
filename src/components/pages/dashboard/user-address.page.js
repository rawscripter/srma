import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form, Card, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AddressForm from './parts/AddressForm';
import { UserProfileProvider } from 'services/profile/userProfile.context';
import { toast } from 'react-toastify';

const UserAddressPage = () => {
    const {
        isLoading,
        loadUserAddress,
        userAddress,
        saveUserAddress,
        successMessage
    } = useContext(UserProfileProvider);
    const [currentAddressId, setCurrentAddressId] = useState(null);


    useEffect(() => {
        loadUserAddress();
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
        }
        // eslint-disable-next-line
    }, [successMessage]);


    useEffect(() => {
        console.log(currentAddressId);
        // eslint-disable-next-line
    }, [currentAddressId]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
    } = useForm();



    const onSubmitData = data => {
        saveUserAddress({ ...data, adresse_id: currentAddressId });
    };
    const onError = () => {
        // clearErrors();
    };

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }

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
                        currentAddressId={currentAddressId}
                        setCurrentAddressId={setCurrentAddressId}
                        register={register}
                        errors={errors}
                        setValue={setValue}
                        addressList={userAddress}
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
