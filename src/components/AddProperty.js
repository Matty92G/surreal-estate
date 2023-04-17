import '../styles/add-property.css';
import { React, useState } from 'react';

const initialState = {
  fields: {
    title: '',
  },
};
const [fields, setFields] = useState(initialState.fields);
const AddProperty = () => (
  <div className="add-property">
    <form>
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddProperty;
