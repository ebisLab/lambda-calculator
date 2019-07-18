import React, {useState} from "react";

//import any components needed
import NumberButton from './NumberButton'

//Import your array data to from the provided data file
import {numbers} from '../../../data'

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  
  const [numVal, setNumVal] = useState(numbers)
  const numarray= {numbers}

  
  console.log('Last prop why here',numarray, 'last')
  console.log('HII text', props, props.number)
  console.log(numarray[2], '2')
  return (
    
    <div className="numsection">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* {numVal.map((n,i) => (<NumberButton key={i} number={n} />))} */}
       {/* {numVal.map((n,i) => (<NumberButton number={n.number} />))} */}
       {/* <NumberButton /> */}
       {numVal.map(number => {
       return (<NumberButton 
       key={number} 
       number={number} 
       addNum = {props.addNum}
       set ={props.set}>
         {console.log('numarray', numarray)}
       </NumberButton>)
       
       })}

    </div>
  );
};

export default Numbers;