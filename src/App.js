import React from 'react'
import { Canvas } from '@react-three/fiber'
import RotatingBox from './RotatingBox';
import "./index.css";
import colors from 'nice-color-palettes';
import Mirror from './Mirror';


const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const palette = colors[getRandom(colors.length, 0)];

const grid = () => {
  const elements = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      elements.push(
        <RotatingBox
          key={`cube-${i}-${j}`}
          position={[-3 + (i + (0.5 * i)), -0.1 + (j + (0.5 * j)), 0]}
          color={palette[getRandom(palette.length, 0)]}
          scale={getRandom(5,10)*0.1}
        />);
    }
  }
  return elements
}

export default function App() {
  return (
    <div id="App" className='canvas-container'>
      <Canvas>
        <color attach="background" args={[palette[getRandom(palette.length, 0)]]} />
        {grid()}
        <Mirror position={[0,-150,-300]}/>
        <ambientLight args={[0xffff00]} intensity={0.2} />
        <directionalLight position={[0, 2, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}



