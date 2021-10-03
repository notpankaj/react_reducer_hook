import { useReducer } from "react"

function myReducer (state,action){
    
    switch(action.type){
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
    
}

function BasicReducerEg() {

    const [state,dispatch] = useReducer(myReducer,0);

    return (
        <div>
            <h1>{ state }</h1>
            <button onClick={()=> dispatch({type: "INCREMENT", payload: 5})} >IN</button>
            <button onClick={()=> dispatch({type: "DECREMENT", payload: 5})} >DE</button>
        </div>
    )
}

export default BasicReducerEg
