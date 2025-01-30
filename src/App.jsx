import { useState } from 'react';
import chroma from 'chroma-js';
import ColorBox from './components/ColorBox';
import './App.css';

const generateHarmoniousColors = (baseColor) => {
  return chroma.scale([baseColor, chroma(baseColor).darken(2)]).mode('lab').colors(5);
};

const generateHarmoniousGradients = (baseColor) => {
  const colors = chroma.scale([baseColor, chroma(baseColor).darken(2)]).mode('lab').colors(5);
  return colors.map((color, index) => {
    const nextColor = colors[index + 1] || colors[0];
    return {
      gradient: `linear-gradient(135deg, ${color}, ${nextColor})`,
      colors: [color, nextColor]
    };
  });
};

const App = () => {
  const [colors, setColors] = useState(generateHarmoniousColors('#4CAF50'));
  const [gradients, setGradients] = useState([]);

  const handleGenerateColors = () => {
    const newBaseColor = chroma.random().hex();
    setColors(generateHarmoniousColors(newBaseColor));
    setGradients([]);
  };

  const handleGenerateGradients = () => {
    const newBaseColor = chroma.random().hex();
    setGradients(generateHarmoniousGradients(newBaseColor));
    setColors([]);
  };

  return (
    <div className="app">
      <h1>Paleta de colores</h1>
      <button onClick={handleGenerateColors}>Generar nueva paleta</button>
      <button onClick={handleGenerateGradients}>Generar degradados</button>
      <div className="color-palette">
        {colors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
        {gradients.map((gradient, index) => (
          <ColorBox key={index} color={gradient.gradient} />
        ))}
      </div>
    </div>
  );
};

export default App;
