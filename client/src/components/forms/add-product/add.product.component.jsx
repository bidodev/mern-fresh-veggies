import React, { useState } from 'react';
import axios from 'axios';

/* Component Imports */
import CustomButton from 'components/UI/custom-button/custom-button.component';
import FormInput from 'components/forms/input/input.component';

/* Styles */
import './add.product.styles.scss';

const AddForm = () => {
  const [file, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('kg');

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const submitForm = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('update', 'products');
    data.append('type', type);
    data.append('price', price);
    data.append('quantity', quantity);
    data.append('unit', unit);
    data.append('photo', file);

    console.log(data);

    axios
      .post('/farmers/products', data)
      .then((res) => {
        console.log(res.response);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <form className="add-product-form" onSubmit={submitForm}>
      <h3>Add Product</h3>
      <FormInput name="name" value={name} required label="name" onChange={(event) => setName(event.target.value)} />
      <select className="form-control" onChange={(event) => setType(event.target.value)}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        <option value="others">Others</option>
      </select>
      <FormInput name="type" value={price} required label="price" onChange={(event) => setPrice(event.target.value)} />
      <FormInput
        name="description"
        value={description}
        required
        label="description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <FormInput
        name="quantity"
        value={quantity}
        required
        label="quantity"
        onChange={(event) => setQuantity(event.target.value)}
      />
      <select className="form-control" onChange={(event) => setUnit(event.target.value)}>
        <option value="kg">kg</option>
        <option value="unit">unit</option>
      </select>
      <input name="file" type="file" onChange={handleFileInput} />
      <div className="buttons">
        <CustomButton type="submit" style={{ width: '10rem' }}>
          Add
        </CustomButton>
      </div>
    </form>
  );
};

export default AddForm;
