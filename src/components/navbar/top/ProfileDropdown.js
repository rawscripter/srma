import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import team3 from 'assets/img/team/3.jpg';
import Avatar from 'components/common/Avatar';
import { AuthProvider } from 'services/auth/auth.context';
const ProfileDropdown = () => {

  const { onLogout } = useContext(AuthProvider);

  return (
    <Dropdown navbar={true} as="li">
      <Dropdown.Toggle
        bsPrefix="toggle"
        as={Link}
        to="#!"
      >
        <Avatar src={team3} />
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-card  dropdown-menu-end">
        <div className="bg-white rounded-2 py-2 dark__bg-1000">
          <Dropdown.Item as={Link} to="/dashboard">
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/meine-daten">
            Meine Daten
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/meine-adressen">
            Meine Adressen
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/meine-farrader">
            Meine Fahrräder
          </Dropdown.Item>
          <Dropdown.Item onClick={() => {
            onLogout();
          }} >
            Logout
          </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
