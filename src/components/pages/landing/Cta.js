import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import bg2 from 'assets/img/generic/stromrad-stuttgart_ebike-2021_riesemueller-load-75_coal-grey.jpeg';
import Section from 'components/common/Section';

const Cta = () => (
  <Section overlay image={bg2} position="center bottom" className="light">
    <Row className="justify-content-center text-center">
      <Col lg={8}>
        <p className="fs-3 fs-sm-4 text-white">
          Umweltschonend mit dem Lastenrad
        </p>
      </Col>
    </Row>
  </Section>
);

export default Cta;
