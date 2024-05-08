import { useState } from "react";


// Another component for holing object in the UseState()
const ObjectUse = () =>{

  // Declaration of useState() with Object in it
  const [car, setCar] = useState({
    Brand : 'Ford',
    Model : 'Mustang',
    Year : '1965',
    Color : 'Red'
  });

  // Updating the Color of the Car using another function
  const UpdateColor = () => {
    setCar(previousState =>{
      return{...previousState, Color :'Blue'}
    });
  }

  return(
    <>
    <h2>I love the {car.Brand} of Model {car.Model}</h2>
    <p>It is from {car.Year} and I love {car.Color} one especially !</p>
    <button
    type="Button"
    onClick={UpdateColor}
    >Blue</button>
    </>
  );
}

export default ObjectUse;

