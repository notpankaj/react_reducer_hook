import { useReducer, useState } from "react"

function myReducer(state, action) {

    switch (action.type) {
        case "ADD_TODO":
            return { 
                todos: [...state.todos, { text: action.payload, completed: false }],
                todoCount: state.todoCount + 1,
            };
        case "TOGGLE_COMPLETED":
            return {
                todos: state.todos.map((t, idx) => idx === action.payload ? { ...t, completed: !t.completed } : t) ,
                todoCount: state.todoCount,
            }
        default:
            return state;
    }

}




function UsingReducer() {

    const [text, setText] = useState('');
    const [{ todos,todoCount }, dispatch] = useReducer(myReducer, { todos: [], todoCount: 0 });

    const toggleTodo = idx => {
        dispatch({ type: 'TOGGLE_COMPLETED', payload: idx })
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({ type: "ADD_TODO", payload: text });
                setText('')
            }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
            </form>

            <div>{todoCount} TODO'S </div>

            {todos && todos.map((todo, idx) => (
                <div
                    key={todo.text}
                    onClick={() => toggleTodo(idx)}
                    style={{
                        cursor: 'pointer',
                        textDecoration: todo.completed ? "line-through" : 'none',
                    }}
                >{todo.text}</div>
            ))}

            {/* <pre>
                {JSON.stringify(todos, null, 2)}
            </pre> */}
        </div>
    )
}

export default UsingReducer
