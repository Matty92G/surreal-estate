import React from 'react';
import axios from 'axios';

const Properties = () => {
  axios
    .get('http://localhost:3000/$id')
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return <>Properties Page</>;
};

export default Properties;
