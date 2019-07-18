import React, {useState}  from "react";

//import any components needed
import OperatorButton from './OperatorButton'

//Import your array data to from the provided data file
import {operators} from '../../../data'

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [operatorData, setOperatorData] = useState(operators)
  return (
    <div className="opsection">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* //{operatorData.map(operator => <Button operator={operator} />)} */}
       {operators.map(operator => <OperatorButton operator={operator} />)}
       
       {/* {operatorData.map((c,i) => (<OperatorButton operator={i.operator} />))} */}
    </div>
  );
};

export default Operators;
