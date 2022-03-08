import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export const AddressSelectModal = ({ show, onHide, onSelect, userAddresses }) => {

    const [selectedAddress, setSelectedAddress] = React.useState({});

    const handleSubmit = () => {
        onSelect(selectedAddress);
        onHide();
    }

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Select Address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Bike</Form.Label>
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={selectedAddress ? `Address ${selectedAddress.adresse_id}` : 'Select Address'}
                            id="input-group-dropdown-1"
                        >
                            {
                                userAddresses.map((adress, index) => (
                                    <Dropdown.Item
                                        key={index}
                                        onClick={() => {
                                            setSelectedAddress(adress);
                                        }}
                                    >
                                        Address - {adress.adresse_id}
                                    </Dropdown.Item>
                                ))
                            }
                        </DropdownButton>
                    </Form.Group>

                    <Row className='mt-3'>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Straße</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Straße"
                                    placeholder="Straße"
                                    value={selectedAddress.street}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Hausnummer</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Hausnummer"
                                    placeholder="Hausnummer"
                                    value={selectedAddress.street_number}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Geschoss</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Geschoss"
                                    placeholder="Geschoss"
                                    value={selectedAddress.floor}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Postleitzahl</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Postleitzahl"
                                    placeholder="Postleitzahl"
                                    value={selectedAddress.postal_code}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Stadt</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Stadt"
                                    placeholder="Stadt"
                                    value={selectedAddress.city}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group >
                                <Form.Label>Bundesland</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Bundesland"
                                    placeholder='Bundesland'
                                    value={selectedAddress.country}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col sm={12}>
                            <Form.Group >
                                <Form.Label>Kommentar</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="textarea"
                                    name="Kommentar"
                                    placeholder="Kommentar"
                                    value={selectedAddress.comment}
                                    disabled
                                />
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>


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