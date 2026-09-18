import React from 'react';

export const Card = ({ children, style, className = '' }) => (
  <div className={`card ${className}`} style={{ padding: '20px', ...style }}>
    {children}
  </div>
);

export default Card;