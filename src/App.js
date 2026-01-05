import { useState } from "react"
import { useIncrement } from "./hooks/useIncrement"


  


function App() {


  const {loading, data, errors} = useFetch('https://jsoplaceholder.typicode.com/posts?_limit=10&_delay=2000')

 return <div className="container my-2">
   {loading && <div className="spinner-border" role="status">
    <span className="visually-hidden">loading...</span>
    </div>}
   {errors && <div className="alert alert-danger">{errors.toString()}</div>}
   {data && <div>
    <ul>
      {data.map(post => (<li key={post.id}>{post.title}</li>))}
    </ul>
</div>}
 </div>
  
}

export default App()
 