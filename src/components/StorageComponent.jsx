import React from 'react';
import {useLocalStorage}  from '../hooks/useStorage';

export default function StorageComponent() {
  const [firstName, setFirstName] = useLocalStorage('firstName','');
  const [lastName, setLastName] = useLocalStorage('lastName','');

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