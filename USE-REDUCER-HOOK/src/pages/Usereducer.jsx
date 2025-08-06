import { useReducer } from "react";

const INITIAL_STATE = {
    name: '',
    email: '',
    isSubscribed: '',
}

const formReducer = (state, action) => {
    switch (action.type) {
        case 'update_field':
            return {...state, [action.field]: action.value }
        case 'toggle_subscription':
             return {...state, isSubscribed: !state.isSubscribed }
        default:
            return state;
    }
}

const Usereducer = () => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  return (
    <div>
        <form action="">            
            <h1>Use Reducer</h1>
            <input 
            type="text" 
            placeholder='Name' 
            value={state.name} 
            onChange={e=> dispatch({type: 'update_field', field: 'name', value: e.target.value})} />

            <input 
            type="email" 
            placeholder='Email' 
            value={state.email} 
            onChange={e=> dispatch({type: 'update_field', field: 'email', value: e.target.value})} />

            <label>
            <input 
            type="checkbox"  
            checked={state.isSubscribed} 
            onChange={e=> dispatch({type: 'toggle_subscription'})} />
            Subscribe to newsletter
            </label>

            <pre>{JSON.stringify(state,null,2)}</pre>
        </form>
    </div>
  )
}

export default Usereducer