
import { useReducer, useState } from "react";


function reducer (state, action) {
if (action.type === 'remove_TODO') {
  return {
...state,
todos: state.todos.filter(todo => todo !== action.payload)
  }
}
if (action.type === 'TOOGLE_TODO') {
  return {
    ...state,
    todos: state.todos.map(todo => todo === action.payload ? {
      ...todo,
      checked: !todo.checked
    } : todo)

  
  }
}
return state
}




function App() {
  const [state, dispatch] = useReducer(reducer,{
    todos: [{
    name: 'faire  les courses',
    checked: false
    },{
        name: 'ranger les courses',
    checked: false
    },{
        name: 'manger les courses',
    checked: false
    
    }]
  })

return <ul>
  {state.todos.map(todo => (<li key={todo.name}
  
  >
    <input type="checkbox" onChange={() => dispatch({type: 'TOGGLE TODO',
      payload: todo
    })}
    checked={todo.checked}/>
    {todo.name}
    <button onClick={() => dispatch({type: 'REMOVE_TODO', payload: todo})}
    >supprimer</button>
    </li>))}

</ul>

}
  
export default App 
