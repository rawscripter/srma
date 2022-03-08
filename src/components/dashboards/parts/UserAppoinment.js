import React, { useContext, useEffect } from 'react'
import { Card, Col, Row, Spinner, Form, Button } from 'react-bootstrap';
import { UserProfileProvider } from 'services/profile/userProfile.context';
import { AppoinmentProvider } from 'services/appoinment/appoinment.context';
import Moment from 'react-moment';
import { toast } from 'react-toastify';
import className from 'classnames';
import { BikeSelectModal } from './modals/BikeSelectModal'
import { AddressSelectModal } from './modals/AddressSelectModal'
export const UserAppoinment = () => {
    const {
        isLoading,
        userAddress,
        userBikes,
        initUserProfile

    } = useContext(UserProfileProvider);

    const {
        loadFreeSlots,
        freeSlots,
        setAppointmentForm,
        appointmentForm,
        makeAppointment,
    } = useContext(AppoinmentProvider);


    const [showBikeModal, setShowBikeModal] = React.useState(false);
    const [showAddressModal, setShowAddressModal] = React.useState(false);
    const [showBillingAddressModal, setShowBillingAddressModal] = React.useState(false);



    useEffect(() => {
        initUserProfile();
        loadFreeSlots();
        // eslint-disable-next-line
    }, []);


    const formatDate = (date) => {
        // format date in Day <Month> DD.MM.YYYY HH:MM with moment.js
        return <Moment format="dddd DD.MM.YYYY HH:mm">{date}</Moment>;
    };

    const submitAppointment = () => {

        if (!appointmentForm.bike_id) {
            toast.error('Please select a bike');
            return;
        }
        if (!appointmentForm.repair_address) {
            toast.error('Please select a repair address');
            return;
        }
        if (!appointmentForm.billing_address) {
            toast.error('Please select a billing address');
            return;
        }
        if (!appointmentForm.timeslot_start) {
            toast.error('Please select a timeslot');
            return;
        }


        makeAppointment().then((response) => {
            console.log(response);
            toast.success('Appointment has been made successfully');
        }).catch(() => {
            toast.error('Something went wrong');
        }
        );
    };


    if (isLoading) {
        return (
            <Row className="mt-5">
                <Col>
                    <Spinner
                        className="position-absolute start-50"
                        animation="grow"
                    />
                </Col>
            </Row>

        )
    }
    return (
        <Card className="mt-5">
            <Card.Body className="pt-5 pb-5">
                <h5>Terminauswahl: </h5>
                <Row className='mt-5'>
                    <Col lg={4}>
                        <div className="form-group mb-4">
                            <Button variant="outline-secondary " className="btn-block" onClick={() => setShowBikeModal(true)}>

                                {appointmentForm.bike_id ? `Bike - ${appointmentForm.bike_id}` : "Wählen sie ihr Fahrrad aus"}
                            </Button>

                            <BikeSelectModal
                                show={showBikeModal}
                                onHide={() => setShowBikeModal(false)}
                                userBikes={userBikes}
                                onSelect={(bike) => {
                                    setAppointmentForm({ ...appointmentForm, bike_id: bike.bike_id });
                                    setShowBikeModal(false);
                                }}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <Button variant="outline-secondary " className="btn-block" onClick={() => setShowAddressModal(true)}>
                                {appointmentForm.repair_address ? `Repair Address - ${appointmentForm.repair_address}` : "Wählen sie ihre Reparaturadresse aus"}
                            </Button>

                            <AddressSelectModal
                                show={showAddressModal}
                                onHide={() => setShowAddressModal(false)}
                                userAddresses={userAddress}
                                onSelect={(address) => {
                                    setAppointmentForm({ ...appointmentForm, repair_address: address.adresse_id });
                                    setShowAddressModal(false);
                                }}
                            />


                        </div>
                        <div className="form-group">

                            <Button variant="outline-secondary " className="btn-block" onClick={() => setShowBillingAddressModal(true)}>

                                {appointmentForm.billing_address ? `Billing Address - ${appointmentForm.billing_address}` : "Wählen sie ihre Reparaturadresse aus"}


                            </Button>


                            <AddressSelectModal
                                show={showBillingAddressModal}
                                onHide={() => setShowBillingAddressModal(false)}
                                userAddresses={userAddress}
                                onSelect={(address) => {
                                    setAppointmentForm({ ...appointmentForm, billing_address: address.adresse_id });
                                    setShowBillingAddressModal(false);
                                }}
                            />

                            {/* <Form.Select aria-label="Default select example"
                                onChange={(e) => setAppointmentForm({ ...appointmentForm, billing_address: e.target.value })}
                            >
                                <option>
                                    Wählen sie ihre Rechnungsadresse aus
                                </option>
                                {userAddress.map((address, index) => (
                                    <option value={address.adresse_id} key={index}>Address - {address.adresse_id}</option>
                                ))}
                            </Form.Select> */}
                        </div>
                    </Col>


                    <Col lg={8}  >
                        <Row >
                            {freeSlots.length > 0 && freeSlots.map((slot, index) => (
                                <Col lg={6} key={index} >
                                    <Card key={index}
                                        className={className({ 'border-success border ': appointmentForm.timeslot_id === slot.timeslot_id }) + 'mb-3'}


                                        onClick={() => setAppointmentForm({
                                            ...appointmentForm,
                                            timeslot_id: slot.timeslot_id,
                                            timeslot_start: slot.timeslot_time_start,
                                            timeslot_end: slot.timeslot_time_end
                                        })}
                                    >
                                        <Card.Body className='p-3 text-center cursor-pointer'   >
                                            {formatDate(slot.timeslot_time_start)} - {formatDate(slot.timeslot_time_end)}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>



                </Row>

                <Row>
                    <Col lg={4} className="m-auto mt-3">
                        <Form.Group>
                            <Button
                                onClick={submitAppointment}
                                color="primary" className="mt-3 w-100">
                                Terminanfrage versenden
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}


