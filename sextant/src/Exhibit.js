// src/Exhibit.js
import React from 'react';
import './Exhibit.css'; // You can create a CSS file for styles.

const Exhibit = ({ title, children }) => {
  return (
    <div className="exhibit">
      <h2>{title}</h2>
      <div className="exhibit-content">
        {children}
      </div>
    </div>
  );
};

export default Exhibit;
