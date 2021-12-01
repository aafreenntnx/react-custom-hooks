import React from 'react';
import useArray from "../hooks/useArray";

export default function ArrayComponent(){
  const {array,push,remove,filter,clear,reset} = useArray([1,2,3,4,5])
  return(
    <div>
    <h3>
      {array.join(", ")}
    </h3>
    <button onClick={()=>push(6)}>Add 6</button>
    <button onClick={()=>push(7)}>Add 7</button>
    <button onClick={()=>push(8)}>Add 8</button>

    <button onClick={()=>remove()}>Remove last item</button>
    <button onClick={()=>filter(a => a % 2 === 0)}>Show even numbers</button>
    <button onClick={()=>filter(a => a % 2 !== 0)}>Show odd numbers</button>

    <button onClick={()=>clear()}>Clear</button>
    <button onClick={()=>reset()}>Reset</button>
    <button onClick={()=>reset([7,8,9])}>Reset to 7,8,9</button>
    </div>
  )
}