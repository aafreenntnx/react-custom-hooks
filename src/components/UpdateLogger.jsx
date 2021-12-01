import React, { useState } from 'react';
import useUpdateLogger from '../hooks/useUpdateLogger'

export default function UpdateLogger() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

useUpdateLogger(firstName, 'first:');
useUpdateLogger(lastName, 'last:');

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
}