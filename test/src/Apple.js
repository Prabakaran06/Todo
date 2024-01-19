
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const ArrayComparison = () => {
  const [array1, setArray1] = useState(['apple', 'banana', 'orange']);
  const [array2, setArray2] = useState(['apple', 'banana', 'orange']);
  const [ret,setRet]=useState(false)
  useEffect(() => {
    // Check if the arrays are equivalent
    const areArraysEqual = JSON.stringify(array1) === JSON.stringify(array2);
    setRet(areArraysEqual)
    // Log the result
    //console.log('Are arrays equal?', areArraysEqual);
  }, [array1, array2]);

  return (
    <div>
      <h2>Array Comparison</h2>
      {/* Your component content goes here */}
      
      <p>Array1: {JSON.stringify(array1)}</p>
      <p>Are arrays equal? {ret.toString()}</p>
    </div>
  );
};

export default ArrayComparison;
