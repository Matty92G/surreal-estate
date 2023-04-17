import '../styles/add-property.css';
import { React, useState } from 'react';

const initialState = {
  fields: {
    title: '',
  },
};
const [fields, setFields] = useState(initialState.fields);
const handleAddProperty = (event) => {
  event.preventDefault();
  console.log(fields);
};
const handleFieldChange = (event) => {
  setFields({ ...fields, [event.target.name]: event.target.value });
};
const AddProperty = () => (
  <div className="add-property">
    <form onSubmit={handleAddProperty}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddProperty;
