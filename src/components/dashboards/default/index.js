import React, { useContext, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import CardService from './CardService';
import className from 'classnames';
import { BikeServiceProvider } from 'services/bikeService/bikeService.context';
import { UserServicesTable } from './../parts/UserServicesTable';
import { UserInvoiceTable } from './../parts/UserInvoiceTable';
import { AppoinmentProvider } from 'services/appoinment/appoinment.context';
import { UserAppoinment } from './../parts/UserAppoinment';

const Dashboard = () => {
  const { services, loadServices, isLoading } = useContext(BikeServiceProvider);
  const { selectedService } = useContext(AppoinmentProvider);

  useEffect(() => {
    loadServices();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Row className="mt-6">
        <Col lg={12} className="mb-5">
          <h2 className="mb-5">Service buchen</h2>
        </Col>
        <br />

        {
          isLoading && (<Col>
            <Spinner
              className="position-absolute start-50"
              animation="grow"
            />
          </Col>
          )
        }
        {!isLoading && services.length > 0 && services.map((service, index) => (
          <Col
            lg={4}
            className={className({ 'mt-6 mt-lg-0': index > 0 })}
            key={index}
          >
            <CardService {...service} />
          </Col>
        ))}
      </Row>

      {selectedService && <UserAppoinment />}

      <Row>
        <Col lg={6} className="mt-6">
          <UserServicesTable />
        </Col>
        <Col lg={6} className="mt-6">
          <UserInvoiceTable />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
