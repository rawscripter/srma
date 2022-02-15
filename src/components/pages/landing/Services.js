import React from 'react';
import { Row, Col } from 'react-bootstrap';
import className from 'classnames';
import serviceList from 'data/feature/serviceList';
import Section from 'components/common/Section';
import CardService from './CardService';
import SectionHeader from './SectionHeader';

const Services = () => (
  <Section bg="light" className="text-center">
    <SectionHeader
      title="Hilfe am richtigen Ort"
      subtitle="Mit unserem mobilen Reparaturservice beheben wir kleine und große Probleme bei ihnen vor Ort, egal ob auf der Arbeit, zu Hause oder im Schwimmbad."
    />
    <Row className="mt-6">
      {serviceList.map((service, index) => (
        <Col
          lg={4}
          className={className({ 'mt-6 mt-lg-0': index > 0 })}
          key={index}
        >
          <CardService {...service} />
        </Col>
      ))}
    </Row>
  </Section>
);

export default Services;
