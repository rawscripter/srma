import React from 'react'
import { Card, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserInvoiceTable = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="mb-3">
                    <h5>Rechnungen</h5>
                </Card.Title>
                <Card.Text>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Rechungsnummer</th>
                                <th> Download als PDF</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>R20221457</td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="file-pdf" />
                                    </div>
                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="shopping-cart" />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>R20221235</td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="file-pdf" />
                                    </div>
                                </td>
                                <td >
                                    <div className='d-flex justify-content-around'>
                                        <FontAwesomeIcon icon="file" />
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