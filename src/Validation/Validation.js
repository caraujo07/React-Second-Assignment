import React from 'react';
import './Validation.css';

const validation = (props) => {
  
  // Declaring a variable with some text
  let validationMessage = 'Text long enough!';
  // Out of the return we can use normal javascript to make some conditional expressions
  if(props.inputLength <= 5) {
    validationMessage = 'Texto too short!';
  }
  
  return(
   <div className="validation" id="validation">
     <p>{validationMessage}</p>
   </div>
  );

    
}

export default validation;