import React from 'react'
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserServicesTable = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="mb-3">
                    <h5>Gebuchte Termine</h5>
                </Card.Title>
                <Card.Text>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Datum</th>
                                <th>Uhrzeit</th>
                                <th>Service</th>
                                <th>Adresse</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20.05.2020</td>
                                <td>10:00</td>
                                <td>Reifenservice</td>
                                <td>

                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="envelope" />
                                        <FontAwesomeIcon icon="calendar-alt" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>20.05.2020</td>
                                <td>10:00</td>
                                <td>Reifenservice</td>
                                <td>

                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="envelope" />
                                        <FontAwesomeIcon icon="calendar-alt" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>20.05.2020</td>
                                <td>10:00</td>
                                <td>Reifenservice</td>
                                <td>

                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="envelope" />
                                        <FontAwesomeIcon icon="calendar-alt" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>20.05.2020</td>
                                <td>10:00</td>
                                <td>Reifenservice</td>
                                <td>

                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="envelope" />
                                        <FontAwesomeIcon icon="calendar-alt" />
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </Table>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}