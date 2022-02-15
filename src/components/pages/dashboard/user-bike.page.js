/* eslint-disable prettier/prettier */
import React from 'react';
import { Row, Col, Form, Card, Button } from 'react-bootstrap';

const UserBikePage = () => {
    return (
        <>
            <Card
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
                    <Row>
                        <Col lg={12} className="mb-3">
                            <h3> Meine Fahrräder</h3>
                        </Col>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Select aria-label="Default select example">
                                    <option>Fahrrad 1-4 Drdo </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hersteller Drdo</Form.Label>
                                <Form.Control placeholder="Hersteller Drdo" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Bezeichnung/Typ</Form.Label>
                                <Form.Control placeholder="Bezeichnung/Typ" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Seriennummer</Form.Label>
                                <Form.Control placeholder="Seriennummer" name="" type="text" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hersteller Schaltung Drdo</Form.Label>
                                <Form.Control placeholder="Hersteller Schaltung Drdo" name="" type="text" />
                            </Form.Group>
                        </Col>
                        <Col lg={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Schaltungstyp</Form.Label>
                                <Form.Control placeholder="Schaltungstyp" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hersteller Bremsen Drdo</Form.Label>
                                <Form.Control placeholder="Hersteller Bremsen Drdo" name="" type="text" />
                            </Form.Group>
                        </Col>
                        <Col lg={8}>
                            <Form.Group className="mb-3">
                                <Form.Label>Schaltungstyp</Form.Label>
                                <Form.Control placeholder="Stadt" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Reifengröße Drdo</Form.Label>
                                <Form.Control placeholder="Reifengröße Drdo" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Mantel/Reifenprofi</Form.Label>
                                <Form.Control placeholder="Mantel/Reifenprofi" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Schlauchhersteller</Form.Label>
                                <Form.Control placeholder="Schlauchhersteller" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Motorenhersteller Drdo</Form.Label>
                                <Form.Control placeholder="Motorenhersteller Drdo" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Motorentyp</Form.Label>
                                <Form.Control placeholder="Motorentyp" name="" type="text" />
                            </Form.Group>
                        </Col>

                        <Col lg={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Akkutyp</Form.Label>
                                <Form.Control placeholder="Akkutyp" name="" type="text" />
                            </Form.Group>
                        </Col>


                        {/* Add Submit Button */}
                    </Row>
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

export default UserBikePage;
