import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row, Form } from 'react-bootstrap';
import { UserProfileProvider } from 'services/profile/userProfile.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BikeTireModal } from './modals/BikeTireModal'
import { BikeTireTubeModal } from './modals/BikeTireTubeModal'
import { BikeRimModal } from './modals/BikeRimModal'
const UserBikeFrom = ({ register, errors, setValue, bikes }) => {

    const [currnetBike, setCurrentBike] = useState({});
    const { setUserBikeDetails, userBikeDetails } = useContext(UserProfileProvider);

    useEffect(() => {
        if (userBikeDetails.bike_id) {

            let bike = bikes.find(bike => bike.bike_id === userBikeDetails.bike_id);
            setCurrentBike(bike)
            setUserBikeDetails(bike);

        } else {
            if (bikes.length > 0) {
                if (bikes[0].bike_id != null) {
                    setCurrentBike(bikes[0]);
                    setUserBikeDetails(bikes[0]);
                }
            }
        }
        // eslint-disable-next-line
    }, [bikes]);

    const defaultMefacturers = [
        "Bergamont",
        "Cannondale",
        "Canyon",
        "Conway",
        "Corratec",
        "Flyer",
        "Focus",
        "Giant",
        "Ghost",
        "Hercules",
        "i: sy",
        "Kalkhoff",
        "KTM",
        "Merida",
        "Rabeneick",
        "Riese & Müller",
        "Rotwild",
        "Stevens",
        "Scott",
        "Specialized",
        "Steppenwolf",
        "Tern",
        "Velo de Ville",
        "Victoria",
        "Sonstige",
    ];

    const defaultGearShiftMenufacturers = [
        "Shimano",
        "EnViolo",
        "Rohloff",
        "SRAM",
        "Pinion",
        "Campagnolo",
        "Sunrace",
        "Sonstige",
    ];

    const defaultBreakesManufacturer = [
        "Shimano",
        "Magura",
        "Tektro",
        "Formula",
        "Hope",
        "Avid",
        "Hayes",
        "SRAM",
        "Sonstige"
    ]

    const defaultMotorManufacturer = [
        "Bosch",
        "Shimano",
        "Yamaha",
        "Brose",
        "Panasonic",
        "Fazua",
        "Sonstige",
    ]


    const setBikeDropDown = (e) => {
        if (e.target.value) {
            let bike = bikes.find(bike => bike.bike_id === e.target.value);
            setCurrentBike(bike);
            setUserBikeDetails(bike);
        } else {
            setUserBikeDetails({});
            setCurrentBike({});
        }
    }

    const [showBikeTireTubeModal, setShowBikeTireTubeModal] = React.useState(false);
    const [showBikeTireModal, setShowBikeTireModal] = React.useState(false);
    const [showBikeRimModal, setShowBikeRimModal] = React.useState(false);

    return (
        <>
            <BikeTireModal
                show={showBikeTireModal}
                onHide={() => setShowBikeTireModal(false)}
            />
            <BikeRimModal
                show={showBikeRimModal}
                onHide={() => setShowBikeRimModal(false)}
            />
            <BikeTireTubeModal
                show={showBikeTireTubeModal}
                onHide={() => setShowBikeTireTubeModal(false)}
            />

            <Row>
                <Col lg={4}>
                    <div className="form-group mb-4">
                        <Form.Select aria-label="Default select example"
                            onChange={setBikeDropDown}
                        >

                            {bikes.map((bike, index) => (
                                <option
                                    set selected={currnetBike.bike_id === bike.bike_id}
                                    value={bike.bike_id} key={index}>Fahrrad - {bike.bike_id}</option>
                            ))}
                            {bikes.length < 4 && <option value="">
                                Neues Fahrrad hinzufügen
                            </option>}

                        </Form.Select>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Hersteller</Form.Label>
                        <Form.Select aria-label="Default select example"
                            onChange={(e) => setValue('manufacturer', e.target.value)}
                        >
                            <option disabled value="">Wähle Hersteller</option>
                            {defaultMefacturers.map((m, index) => (
                                <option
                                    set selected={currnetBike.manufacturer === m}
                                    value={m} key={index}>{m}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <WizardInput
                    type="text"
                    label="Bezeichnung/Typ"
                    name="type"
                    formGroupProps={{ as: Col, sm: 4 }}
                    errors={errors}
                    formControlProps={{
                        ...register('type', {
                            // // required: 'Bezeichnung/Typ is required',
                            value: currnetBike.type
                        }),
                        defaultValue: currnetBike.type
                    }}
                />
                <WizardInput
                    type="text"
                    label="Seriennummer"
                    name="serial_number"
                    formGroupProps={{ as: Col, sm: 4 }}
                    errors={errors}
                    formControlProps={{
                        ...register('serial_number', {
                            // required: 'Seriennummer is required',
                            value: currnetBike.serial_number
                        }),
                        defaultValue: currnetBike.serial_number
                    }}
                />
            </Row>

            <Row className="mb-3">

                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Hersteller Schaltung</Form.Label>
                        <Form.Select aria-label="Default select example"
                            onChange={(e) => setValue('gear_shifters_manufacturer', e.target.value)}
                        >
                            <option disabled value="">Wähle den Hersteller der Schaltung</option>
                            {defaultGearShiftMenufacturers.map((m, index) => (
                                <option
                                    set selected={currnetBike.gear_shifters_manufacturer === m}
                                    value={m} key={index}>{m}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>

                <WizardInput
                    type="text"
                    label="Schaltungstyp"
                    name="gear_shifter"
                    formGroupProps={{ as: Col, sm: 8 }}
                    errors={errors}
                    formControlProps={{
                        ...register('gear_shifter', {
                            // required: 'Schaltungstyp is required',
                            value: currnetBike.gear_shifter
                        }),
                        defaultValue: currnetBike.gear_shifter
                    }}
                />


            </Row>

            <Row className="mb-3">


                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Hersteller Bremsen</Form.Label>
                        <Form.Select aria-label="Default select example"
                            onChange={(e) => setValue('breakes_manufacturer', e.target.value)}
                        >
                            <option disabled value="">Wähle den Hersteller der Bremsen</option>
                            {defaultBreakesManufacturer.map((m, index) => (
                                <option
                                    set selected={currnetBike.breakes_manufacturer === m}
                                    value={m} key={index}>{m}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>


                <WizardInput
                    type="text"
                    label="Bremsentyp"
                    name="breakes_type"
                    formGroupProps={{ as: Col, sm: 8 }}
                    errors={errors}
                    formControlProps={{
                        ...register('breakes_type', {
                            // required: 'Bremsentyp is required',
                            value: currnetBike.breakes_type
                        }),
                        defaultValue: currnetBike.breakes_type
                    }}
                />
            </Row>
            <Row className="mb-3">
                <Col lg={4}>
                    <Row >
                        <div className='d-flex align-items-center'>
                            <WizardInput
                                type="text"
                                label="Reifengröße"
                                name="rimsize"
                                formGroupProps={{ as: Col, sm: 11 }}
                                errors={errors}
                                formControlProps={{
                                    ...register('rimsize', {
                                        // required: 'Reifengröße is required',
                                        value: currnetBike.rimsize
                                    }),
                                    defaultValue: currnetBike.rimsize
                                }}
                            />
                            <div>
                                <button onClick={
                                    () => setShowBikeRimModal(true)
                                } type="button" className="btn" style={{
                                    backgroundColor: '#f1f1f1',
                                    margin: '10px',
                                    marginTop: '40px',
                                }}>
                                    <FontAwesomeIcon icon="info" />
                                </button>
                            </div>
                        </div>
                    </Row>
                </Col>


                <Col lg={4}>
                    <Row >
                        <div className='d-flex align-items-center'>
                            <WizardInput
                                type="text"
                                label="Reifenbezeichnung"
                                name="tire_casing"
                                formGroupProps={{ as: Col, sm: 11 }}
                                errors={errors}
                                formControlProps={{
                                    ...register('tire_casing', {
                                        // required: ' Mantel/Reifenprofil is required',
                                        value: currnetBike.tire_casing
                                    }),
                                    defaultValue: currnetBike.tire_casing
                                }}
                            />
                            <div>
                                <button onClick={
                                    () => setShowBikeTireModal(true)
                                } type="button" className="btn" style={{
                                        backgroundColor: '#f1f1f1',
                                        margin: '10px',
                                        marginTop: '40px',
                                    }}>
                                    <FontAwesomeIcon icon="info" />
                                </button>
                            </div>
                        </div>
                    </Row>
                </Col>

                <Col lg={4}>
                    <Row >
                        <div className='d-flex align-items-center'>
                            <WizardInput
                                type="text"
                                label="Schlauchhersteller"
                                name="tire_tube"
                                formGroupProps={{ as: Col, sm:11 }}
                                errors={errors}
                                formControlProps={{
                                    ...register('tire_tube', {
                                        // required: 'Schlauchhersteller is required',
                                        value: currnetBike.tire_tube
                                    }),
                                    defaultValue: currnetBike.tire_tube
                                }}
                            />
                            <div>
                                <button onClick={
                                    () => setShowBikeTireTubeModal(true)
                                } type="button" className="btn" style={{
                                        backgroundColor: '#f1f1f1',
                                        margin: '10px',
                                        marginTop: '40px',
                                    }}>
                                    <FontAwesomeIcon icon="info" />
                                </button>
                            </div>
                        </div>
                    </Row>
                </Col>


            </Row>
            <Row className="mb-3">
                <Col lg={4}>
                    <Form.Group>
                        <Form.Label>Antriebshersteller</Form.Label>
                        <Form.Select aria-label="Default select example"
                            onChange={(e) => setValue('motor_manufacturer', e.target.value)}
                        >
                            <option disabled value="">Wähle den Antriebshersteller</option>
                            {defaultMotorManufacturer.map((m, index) => (
                                <option
                                    set selected={currnetBike.motor_manufacturer === m}
                                    value={m} key={index}>{m}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>


                <WizardInput
                    type="text"
                    label="Antriebsart"
                    name="motor_type"
                    formGroupProps={{ as: Col, sm: 4 }}
                    errors={errors}
                    formControlProps={{
                        ...register('motor_type', {
                            // required: 'Motorentyp is required',
                            value: currnetBike.motor_type
                        }),
                        defaultValue: currnetBike.motor_type
                    }}
                />
                <WizardInput
                    type="text"
                    label="Akkutyp"
                    name="batterie_type"
                    formGroupProps={{ as: Col, sm: 4 }}
                    errors={errors}
                    formControlProps={{
                        ...register('batterie_type', {
                            // required: 'Akkutyp is required',
                            value: currnetBike.batterie_type
                        }),
                        defaultValue: currnetBike.batterie_type
                    }}
                />
            </Row>
        </>
    );
};

UserBikeFrom.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    setValue: PropTypes.func.isRequired
};

export default UserBikeFrom;
