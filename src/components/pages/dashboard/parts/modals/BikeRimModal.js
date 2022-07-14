import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export const BikeRimModal = ({ show, onHide, onSelect, userBikes }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Bike Rim</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row  >
                    <Col sm={12}>
                        <img class="w-100" src="https://www.ilovebicycling.com/wp-content/uploads/2016/09/road-bike-sizing-600x396.jpg" alt="" />
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Abbrechen
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
