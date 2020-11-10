import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import 'react-credit-cards/lib/styles.scss';

const Checkout = () => {
  const [number, setNumber] = useState('');
  const [displayCVC, setDisplayCVC] = useState('3243');
  const [expiryDate, setExpiryDate] = useState('');
  const [focused, setFocused] = useState('');
  const [name, setName] = useState('');
  const handleInputFocus = (e) => {
    setFocused(e.target.name);
  };
  console.log(name);
  const handleInputChange = (e) => {
    console.log(e.target);
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
    <div className="PaymentForm">
      <Cards cvc={displayCVC} expiry={expiryDate} focused={focused} name={name} number={number} />
      <form>
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
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
