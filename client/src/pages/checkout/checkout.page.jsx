import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import { useHistory } from 'react-router-dom';
import 'react-credit-cards/lib/styles.scss';
import './checkout.page.style.scss';

import Spinner from 'components/UI/spinner/spinner.component';

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
      history.push('/');
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

  //error on switch cases
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   switch (name) {
  //     case 'number':
  //       setNumber(value);
  //     case 'name':
  //       setName(value);
  //     case 'expiry':
  //       setExpiryDate(value);
  //     case 'cvc':
  //       setDisplayCVC(value);
  //     default:
  //   }
  // };
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
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                required
                onChange={(e) => handleInputChange(e)}
                onFocus={(e) => handleInputFocus(e)}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  placeholder="Valid Thru"
                  className="form-control"
                  required
                  onChange={(e) => handleInputChange(e)}
                  onFocus={(e) => handleInputFocus(e)}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  placeholder="CVC"
                  className="form-control"
                  required
                  onChange={(e) => handleInputChange(e)}
                  onFocus={(e) => handleInputFocus(e)}
                />
              </div>
              <input type="hidden" name="issuer" value />
              <div className="form-actions">
                <button type="submit" className="btn btn-primary btn-block">
                  PAY
                </button>
              </div>
            </div>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Checkout;
