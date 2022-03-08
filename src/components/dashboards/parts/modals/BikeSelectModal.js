import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export const BikeSelectModal = ({ show, onHide, onSelect, userBikes }) => {
    const [selectedBike, setSelectedBike] = React.useState(null);


    const handleSubmit = () => {
        onSelect(selectedBike);
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Bike auswählen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Bike</Form.Label>
                            <DropdownButton
                                as={InputGroup.Prepend}
                                variant="outline-secondary"
                                title={selectedBike ? `Bike ${selectedBike.bike_id}` : 'Bike auswählen'}
                                id="input-group-dropdown-1"
                            >
                                {
                                    userBikes.map((bike, index) => (
                                        <Dropdown.Item
                                            key={index}
                                            onClick={() => {
                                                setSelectedBike(bike);
                                            }}
                                        >
                                            Bike - {bike.bike_id}
                                        </Dropdown.Item>
                                    ))
                                }
                            </DropdownButton>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Hersteller Drdo</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Hersteller Drdo"
                                value={selectedBike ? selectedBike.manufacturer : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>ZBezeichnung/Typ</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="ZBezeichnung/Typ"
                                value={selectedBike ? selectedBike.type : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Seriennummer</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Seriennummer"
                                value={selectedBike ? selectedBike.serial_number : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className='mt-3'>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Hersteller Schaltung Drdo</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Hersteller Schaltung Drdo"
                                value={selectedBike ? selectedBike.gear_shifters_manufacturer : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Schaltungstyp</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Schaltungstyp"
                                value={selectedBike ? selectedBike.gear_shifter : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Hersteller Bremsen Drdo</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Hersteller Bremsen Drdo"
                                value={selectedBike ? selectedBike.breakes_manufacturer : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Bremsentyp</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Bremsentyp"
                                value={selectedBike ? selectedBike.breakes_type : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Reifengröße</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Reifengröße"
                                value={selectedBike ? selectedBike.rimsize : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Mantel/Reifenprofil</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Mantel/Reifenprofil"
                                value={selectedBike ? selectedBike.tire_casing : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-3'>

                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Schlauchhersteller</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Schlauchhersteller"
                                value={selectedBike ? selectedBike.tire_tube : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>

                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Motorenhersteller Drdo</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Motorenhersteller Drdo"
                                value={selectedBike ? selectedBike.motor_manufacturer : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Motorentyp</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Motorentyp"
                                value={selectedBike ? selectedBike.motor_type : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    <Col sm={4}>
                        <Form.Group>
                            <Form.Label>Akkutyp</Form.Label>
                            <Form.Control
                                as="input"
                                type="text"
                                placeholder="Akkutyp"
                                value={selectedBike ? selectedBike.batterie_type : ''}
                                disabled
                            />
                        </Form.Group>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Abbrechen
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Bestätigen
                </Button>
            </Modal.Footer>
        </Modal>
    );
}