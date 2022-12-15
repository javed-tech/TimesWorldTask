import { createStore } from "redux"

const initialState ={
    users : [{
        username : '7065834885',
        password: 'Mypass12'
}],
loggedInUser: null,
user: null
}

const reducer =(state = initialState , action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                user : action.payload
            }
            case "LOGOUT":
                return{
                    ...state,
                    user : null
                }
    
            default:
             return state;   
    }
}

export default createStore(reducer)