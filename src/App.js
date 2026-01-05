
import React, {useId, useMemo, useState } from "react";
import {Input} from "./components/forms/input.jsx";

function App() {
 
  const [firstname, setfirstname] = useState('john')
    const [password, setpassword] = useState('Mot de passe')
    const security =  passwordSecurity(password)
   
    const random = useMemo(() => Math.random(), [])

    return <div className="container my-3 vstack gap-2">
      {random}
      <input
      label="Nom d'utilisateur"
      value={firstname}
      onChange={setfirstname}
      />
     <div>
     <Input 
     label="Password"
     type="Password"
     value={Password}
     onChange={setpassword}
     />
     sécurité : {security}

     </div>


    </div>
}



export default App()
 