import { useCallback, useReducer } from "react"

function todosReducer(state, action) {
    if (action.type === 'Remove__Todo') {
        return {
            ...state,
            todos: state.todos.filter(todo => todo !== action.payload)

        }
    }
    if (action.type === 'Toggle_Todo') {
        return {
            ...state,
            todos: state.todos.map(todo => todo ===action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }
if (action.type === 'CLEAR_COMPLETED') {
    return {
        ...state,
        todos: state.todos.filter(todo => !todo.checked)

    }
}

if (action.type === 'TOGGGLE_FILTER') {
    return {
        ...state,
        showCompleted: !state.showCompleted
    }
}
return state
}
export function useTodos () {
    const [state, dispatch] = useReducer(todosReducer, {
        showCompleted: true,
        todos: [{
            name: 'faire les courses',
            checked: false
        }, {
            name: 'Ranger les courses',
            checked: false
        }, {
            name: 'Manger les courses',
            checked: false
        }]
        })

        const visibleTodos = state.showCompleted 
        ? state.todos :
         state.todos.filter((t) =>
            !t.checked);
            return {
                showCompleted: state.showCompleted,
                visibleTodos: visibleTodos,
                toggleTodo: useCallback(
                    (todo) => dispatch({ type: "TOGGLE_TODO", payload: todo }),
                    [],
                ),
                
              removeTodo: useCallback((todo) => dispatch({ type: "REMOVE_TODO", payload: todo}),
            [],
              ),
              clearCompleted: useCallback(() => dispatch({ type: "CLEAR_COMPLETED" }),
              [],
            ),
              toggleFilter: useCallback(() => dispatch({ type: "TOGGLE_FILTER" }), []),
        };
            }
        
    


