import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue){
  function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    return savedValue ? savedValue : initialValue;
  }
  const [state, setState] = useState(()=>getSavedValue(key,initialValue));
  useEffect(()=>{
localStorage.setItem(key, JSON.stringify(state))
  },[state])
  return [state, setState]
}