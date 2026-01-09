
import { useState } from "react";
import {input} from "./components/forms/input.jsx";

function App() {
  const [name, setname] = useState('')
  console.log('App', 'render')
  
  return <div className="container my-2 vstack gap-2">
    <div>
      <Input label="prénom" onChange={setName} value={name}/>
      <div>
        {name.toUpperCase()}
      </div>
    </div>
    <Info/>
  </div>
}

function Info () {
  console.log('Info', 'render')
 
  return <div className="alert alert-info">
    lorem ipzezm dolor st amedffgt dsvvb fbdbdbddb
    ddfb bdbdbdb bdbd bdhhtgbdb 
  </div>
}
export default App 
