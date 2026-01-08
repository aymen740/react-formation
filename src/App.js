
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";




function App() {

  const [duration, setduration] = useState(5)
  const [secondsleft, setsecondleft] = useState(duration)
return <div className="vstack gap-2">
<input 
value={duration}
onChange={setduration}
placeholder="Timer..."
/>
<p>
  décompte : 

</p>
</div>
}
    

  
export default App 
