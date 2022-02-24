import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from 'react-bootstrap';
import { AppoinmentProvider } from 'services/appoinment/appoinment.context';
const CardService = ({ service_id, service_prize, service_title, service_description, children }) => {
  // create new style 

  const { setSelectedService, selectedService } = useContext(AppoinmentProvider);
  return (

    <Card
      onClick={() => {
        setSelectedService(service_id);
      }}
      // add class if selectedService === service_id
      className={className({ 'border-success border ': selectedService === service_id }) + ' card-span h-100'
      }

    >
      <div className="card-span-img">
        <FontAwesomeIcon
          icon="wrench"
          className="text-inverse fs-4"
        />
      </div>
      <Card.Body className="pt-6 pb-4 text-center">
        {/* <h5 className="mb-2">${service_prize}</h5> */}
        <h5 className="mb-2">{service_title}</h5>
        {service_description && <p>{service_description}</p>}

      </Card.Body>
    </Card >

  );
};

CardService.propTypes = {
  service_title: PropTypes.string.isRequired,
  service_description: PropTypes.string,
  service_prize: PropTypes.string,
};



export default CardService;
