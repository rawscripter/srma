import React from 'react';
import PropTypes from 'prop-types';
import WizardInput from './WizardInput';
import { Col, Row, Form } from 'react-bootstrap';

const AddressForm = ({ register, errors, setValue, addressList, setCurrentAddressId, currentAddressId }) => {
  const [userAddress, setUserAddress] = React.useState({});

  React.useEffect(() => {

    if (currentAddressId) {
      setUserAddress(addressList.find(address => address.adresse_id === currentAddressId));
    } else {
      if (addressList.length > 0) {
        setUserAddress(addressList[0]);
      }
    }
    // eslint-disable-next-line
  }, [addressList]);

  const setAddressDropdown = (e) => {
    const address = addressList.find(
      // eslint-disable-next-line
      (address) => address.adresse_id == e.target.value,
    );
    if (address) {
      setUserAddress(address);
      setCurrentAddressId(address.adresse_id);
    } else {
      setUserAddress({});
      setCurrentAddressId('');
    }
  };

  return (
    <>
      <Row>
        <Col lg={4}>
          <div className="form-group mb-4">
            <Form.Select aria-label="Wähle eine Adresse"
              onChange={setAddressDropdown}
              name="adresse_id"
            >

              {addressList.map((address, index) => (
                <option
                  set selected={userAddress.adresse_id === address.adresse_id}
                  value={address.adresse_id} key={index}>Adresse - {address.adresse_id}</option>
              ))}
              {addressList.length < 4 && <option value="">
                Neue Adresse hinzufügen
              </option>}

            </Form.Select>
          </div>
        </Col>
      </Row>


      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Straße"
          name="street"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('street', {
              // required: 'Straße is required',
              value: userAddress.street,
            }),
            defaultValue: userAddress.street
          }}
        />
        <WizardInput
          type="text"
          label="Hausnummer "
          name="street_number"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('street_number', {
              // required: 'Hausnummer is required',
              value: userAddress.street_number
            }),
            defaultValue: userAddress.street_number
          }}
        />
        <WizardInput
          type="text"
          label="Geschoss"
          name="floor"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('floor', {
              // required: 'Geschoss is required',
              value: userAddress.floor
            }),
            defaultValue: userAddress.floor
          }}
        />
      </Row>
      <Row className="mb-3">
        <WizardInput
          type="text"
          label="Postleitzahl"
          name="postal_code"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('postal_code', {
              // required: 'Postleitzahl is required',
              value: userAddress.postal_code
            }),
            defaultValue: userAddress.postal_code
          }}
        />
        <WizardInput
          type="text"
          label="Stadt "
          name="city"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('city', {
              // required: 'Stadt is required',
              value: userAddress.city
            }),
            defaultValue: userAddress.city
          }}
        />
        <WizardInput
          type="text"
          label="Bundesland"
          name="country"
          formGroupProps={{ as: Col, sm: 4 }}
          errors={errors}
          formControlProps={{
            ...register('country', {
              // required: 'Bundesland is required',
              value: userAddress.country
            }),
            defaultValue: userAddress.country
          }}
        />
      </Row>

      <WizardInput
        type="textarea"
        label="Kommentar"
        name="comment"
        errors={errors}
        formControlProps={{
          ...register('comment', {
            // required: 'Kommentar is required',
            value: userAddress.comment
          }),
          defaultValue: userAddress.comment
        }}
      />
    </>
  );
};

AddressForm.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  setValue: PropTypes.func.isRequired
};

export default AddressForm;
