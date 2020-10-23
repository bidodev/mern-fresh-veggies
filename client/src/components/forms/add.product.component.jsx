import React, { useState } from 'react';
import axios from 'axios';
import CustomButton from 'components/custom-button/custom-button.component';
import FormInput from 'components/forms/input.component';
import './add.product.component.style.scss';

const AddForm = () => {
  const [name, setProductName] = useState('');
  const [type, setProductType] = useState('');
  const [description, setProductDescription] = useState('');
  const [file, setSelectedFile] = useState(null);

  const handleAddProduct = async (event) => {
    event.preventDefault();

    const photo = new FormData();
    photo.append('photo', file);

    const data = {
      name,
      type,
      description,
      photo
    };

    console.log(data)
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
      case 'file':
        return setSelectedFile(event.target.files[0])
      default:
    }
  };
  return (
    <form className="add-product-form" onSubmit={handleAddProduct}>
      <FormInput
        name="name"
        type="name"
        value={name}
        required
        label="name"
        handleInputValue={handleInputValue}
      />
      <FormInput
        name="type"
        type="type"
        value={type}
        required
        label="type"
        handleInputValue={handleInputValue}
      />
      <FormInput
        name="description"
        type="description"
        value={description}
        required
        label="description"
        handleInputValue={handleInputValue}
      />
      <h3>Upload a Photo</h3>
      <input name="file" type="file" onChange={handleInputValue} />
      <div className="buttons">
        <CustomButton type="submit" style={{ width: '15rem' }}>
          Add Product
        </CustomButton>
      </div>
    </form>
  );
};

export default AddForm;
