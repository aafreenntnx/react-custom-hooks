import { useState } from 'react';

const useArray = (initialValue) => {
const [array, setArray] = useState(initialValue);
function push(element) {
  setArray(arr => [...arr, element])
}

function remove(){
  setArray(arr => arr.slice(0,arr.length - 1))
}

function filter(callback){
  setArray(arr =>arr.filter(callback))
}
function clear(){
  setArray([])
}
function reset(value=initialValue){
  setArray(value)
}
return {array,push,remove,filter,clear,reset}
};

export default useArray;