import '../styles/add-property.css';
import React from 'react';
import { useState } from 'react';

const AddProperty = () => (
    const initialState = {
        fields: {
            title: '',
        },
    };
    const [fields, setFields] = useState(initialState.fields);
  <div className="add-property">
    <form>
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddProperty;
