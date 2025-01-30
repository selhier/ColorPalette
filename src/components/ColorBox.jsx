import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{ background: color }}>
      {color.includes('linear-gradient') ? 'Degradado' : color}
    </div>
  );
};

export default ColorBox;