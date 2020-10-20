import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from 'components/custom-button/custom-button.component';
import FormInput from 'components/forms/input.component';
import './add-product.component.style.scss';

const AddForm = () => {
  const [productName, setProductName] = useState('');
  const [productType, setProductType] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleAddProduct = async (event) => {
    event.preventDefault();

    const data = {
      name: productName,
      type: productType,
      description: productDescription,
    };

    axios
      .post('/farmers/products', data)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log('Error creating user', error.message));

    //Reset-ing the form after submit
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
  };

  //update localState
  const handleInputValue = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case 'name':
        return setProductName(value);
      case 'type':
        return setProductType(value);
      case 'description':
        return setProductDescription(value);
      default:
    }
  };
  return (
    <form className="add-product-form" onSubmit={handleAddProduct}>
      <FormInput
        name="name"
        type="name"
        value={productName}
        required
        label="name"
        handleInputValue={handleInputValue}
      />
      <FormInput
        name="type"
        type="type"
        value={productType}
        required
        label="type"
        handleInputValue={handleInputValue}
      />
      <FormInput
        name="description"
        type="description"
        value={productDescription}
        required
        label="description"
        handleInputValue={handleInputValue}
      />
      <div className="buttons">
        <CustomButton type="submit" style={{ width: '15rem' }}>
          Add Product
        </CustomButton>
      </div>
    </form>
  );
};

export default AddForm;
