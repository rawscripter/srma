import React from 'react'
import { Modal, Button, Form, Col, Row, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap'

export const BikeTireModal = ({ show, onHide, onSelect, userBikes }) => {
    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Bike Casing </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Row  >
                    <Col sm={12}>
                        <img class="w-100" src="https://bicyclevolt.com/wp-content/uploads/2020/06/26x195-inner-tube.jpg" alt="" />
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
