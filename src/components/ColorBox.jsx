import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color, gradientColors }) => {
  return (
    <div className="color-box" style={{ background: color }}>
      {gradientColors ? (
        <div>
          <div>{gradientColors[0]}</div>
          <div>{gradientColors[1]}</div>
        </div>
      ) : (
        color
      )}
    </div>
  );
};

export default ColorBox;