import React from 'react';
import './Alerts.css';

const AlertTemplate = ({ style, options, message, close }) => (
  <div
    className={`text-sm alert-block alert-type-${
      options.type === 'info'
        ? 'info'
        : options.type === 'success'
        ? 'success'
        : 'error'
    }`}
  >
    {options.type === 'info'}
    {options.type === 'success'}
    {options.type === 'error'}
    {message}
  </div>
);

export default AlertTemplate;
