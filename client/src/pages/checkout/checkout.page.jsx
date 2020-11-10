import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import { useHistory } from 'react-router-dom';

import 'react-credit-cards/lib/styles.scss';
import './checkout.page.style.scss';

import Spinner from 'components/UI/spinner/spinner.component';
import CustomButton from 'components/UI/custom-button/custom-button.component';

const Checkout = () => {
  const [number, setNumber] = useState('');
  const [displayCVC, setDisplayCVC] = useState('••••');
  const [expiryDate, setExpiryDate] = useState('');
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      history.push('/success');
    }, 2000);
  };
  const handleInputFocus = (e) => {
    setFocused(e.target.name);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number') {
      setNumber(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'expiry') {
      setExpiryDate(value);
    } else if (name === 'cvc') {
      setDisplayCVC(value);
    }
  };

  return (
    <div id="PaymentForm">
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Cards cvc={displayCVC} expiry={expiryDate} focused={focused} name={name} number={number} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                className="form-control"
                required
                onChange={(e) => handleInputChange(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              required
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />

            <input
              type="tel"
              name="expiry"
              placeholder="Valid Thru"
              className="form-control"
              required
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />

            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              className="form-control"
              required
              onChange={(e) => handleInputChange(e)}
              onFocus={(e) => handleInputFocus(e)}
            />

            <input type="hidden" name="issuer" value />
            <div className="form-actions">
              <CustomButton type="submit">PAY NOW</CustomButton>
            </div>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Checkout;
