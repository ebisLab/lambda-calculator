import React from "react";

const Display = (props) => {
  console.log(props, props.number)
  return <div>
    {props.number}
  </div>;
};


export default Display;
