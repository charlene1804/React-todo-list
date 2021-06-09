import React from 'react';
import PropTypes from 'prop-types';

import './counter.scss';

const Counter = ({ text }) => (
  <p className="counter_paragraph">
    {text} 
  </p>
);

Counter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Counter;
