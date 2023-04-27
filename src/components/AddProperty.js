import '../styles/add-property.css';
import { React, useState, useId } from 'react';
import axios from 'axios';
import Alert from './Alert';

const AddProperty = () => {
  const initialState = {
    fields: {
      id: useId(),
      title: '',
      type: 'Flat',
      bedrooms: '1',
      bathrooms: '1',
      price: '',
      city: 'Manchester',
      email: '',
    },
    alert: {
      message: '',
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: '', isSuccess: false });
    console.log(fields);
    // postData;
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const postData = async () => {
    await axios
      .post('http://localhost:3000/add-property', fields)
      .then((res) => {
        setAlert({
          message: 'property Added',
          isSuccess: true,
        });
        console.log(res);
        console.log(res.data);
        handleAddProperty(res);
      })
      .catch((err) => {
        setAlert({
          message: 'Server error. Please try again later.',
          isSuccess: false,
        });
        console.log(err);
      });
  };
  return (
    <div className="add-property">
      <form onSubmit={(handleAddProperty, postData)}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Title
          <input
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <select
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7+">7+</option>
          </select>
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <select
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </label>
        <label htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="1000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          eMail
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
