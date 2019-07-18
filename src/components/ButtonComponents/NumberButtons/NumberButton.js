import React from "react";

const NumberButton = (props) => {
  console.log('text', props, props.number)
  return (
    <button onClick={()=> console.log(props.number)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
      {props.text}
    </button>
  );
};

export default NumberButton;
