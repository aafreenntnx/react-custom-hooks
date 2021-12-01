import React, { useState, useRef } from 'react';
import useEventListener from '../hooks/useEventListener';
const boxStyles = {
  height: '250px',
  width: '250px',
  background: 'red',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function EventListnerComponent() {

  const boxRef = useRef();
  const [key, setKey] = useState('');
  const [mouseIn, setMouseIn] = useState(false);

  useEventListener('keypress', (e) => setKey(e.key))
  useEventListener('mouseover', () => setMouseIn(true), boxRef.current)
  useEventListener('mouseout', () => setMouseIn(false), boxRef.current)

  return (
    <div>
      <h1>{`Key Pressed: ${key}`}</h1>
      <div style={boxStyles} ref={boxRef}>
        <h1>{mouseIn ? 'IN' : 'OUT'}</h1>
      </div>
    </div>
  );
}