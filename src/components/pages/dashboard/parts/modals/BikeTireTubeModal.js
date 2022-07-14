import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export const BikeTireTubeModal = ({ show, onHide, onSelect, userBikes }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Bike Tire Tube</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row  >
                    <Col sm={12}>
                        <img class="w-100" src="https://ae01.alicdn.com/kf/HTB1bQcZAf5TBuNjSspcq6znGFXaJ/Cycling-Bicycle-Bike-Inner-Tubes-Bike-Cycling-Tire-Tube-Valve-Tube-16in-18in-20in-24in-26in.jpg" alt="" />
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
