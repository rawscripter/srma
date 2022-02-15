import React, { useContext } from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bg1 from 'assets/img/generic/stromrad-stuttgart_ebike-2021_riesemueller-load-75_coal-grey.jpeg';
import dashboard from 'assets/img/generic/dashboard-alt.png';
import dashboardDark from 'assets/img/generic/dashboard-alt-dark.png';
import Section from 'components/common/Section';
import AppContext from 'context/Context';

const Hero = () => {
  const {
    config: { isDark }
  } = useContext(AppContext);

  return (
    <Section
      className="py-0 overflow-hidden light"
      image={bg1}
      position="center"
    >
      <Row className="justify-content-center align-items-center pt-8 pt-lg-10 pb-lg-9 pb-xl-0">
        <Col
          md={11}
          lg={8}
          xl={4}
          className="pb-7 pb-xl-9 text-center text-xl-start"
        >
          <h1 className="text-black fw-light">
            Wir bringen ihre
            <br />
            <Typed
              strings={['Mobilität', 'Bewegung']}
              typeSpeed={40}
              backSpeed={50}
              className="fw-bold ps-2"
              loop
            />
            zurück
          </h1>
        </Col>
      </Row>
    </Section>
  );
};

export default Hero;
