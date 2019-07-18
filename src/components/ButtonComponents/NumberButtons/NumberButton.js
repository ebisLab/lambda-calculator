import React from "react";

const NumberButton = (props) => {
  
  console.log('text', props, props.number)
  
  return (
    <button onClick={()=> props.addNum(props.number)} className="btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number[0]}
      
      {/* {props.text} */}
      {console.log('Last prop here', props.number.length, 'last')}
    </button>
  );
  
};



export default NumberButton;
