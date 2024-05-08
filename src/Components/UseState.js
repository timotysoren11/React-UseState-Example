import { useState } from "react";

const UsingState = () =>{
  
  // Using of USeState
  const [color, setColor] = useState('Red');
  
  return(
    <div>
      <h2>My favourite color is {color} !</h2>
      <button onClick={()=>setColor('Blue')}>Click</button>
    </div>
  );
}

export default UsingState;