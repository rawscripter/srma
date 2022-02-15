import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';

const CardService = ({ service_prize, service_title, service_description, children }) => (
  <Card className="card-span h-100">
    <div className="card-span-img">
      <FontAwesomeIcon
        icon="wrench"
        className="text-inverse fs-4"
      />
    </div>
    <Card.Body className="pt-6 pb-4 text-center">
      <h5 className="mb-2">${service_prize}</h5>
      <h5 className="mb-2">{service_title}</h5>
      {service_description && <p>{service_description}</p>}

    </Card.Body>
  </Card>
);

CardService.propTypes = {
  service_title: PropTypes.string.isRequired,
  service_description: PropTypes.string,
  service_prize: PropTypes.string,
};

export default CardService;
