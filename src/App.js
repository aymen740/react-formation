
import React, { useState } from "react";

function App() {
  const [person, setperson] = useState({
  firstName: 'john',
  lastName: 'Doe',
  age: 18
})

const [count, setCount] = useState(0)
const incrementAge = () => {
  setperson({...person, age: person.age + 1})
}
 return <>
 <p>Age de {person.firstName} : {person.age}</p>

  <button onClick={incrementAge}>Gagner une année</button>
  </>
}


export default App()
 