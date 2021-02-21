import React, {createContext, useReducer} from "react"; 

const initState = {
    user: null
};

if(window.localStorage.getItem("user")){
    initState.user = window.localStorage.getItem("user");
}

const AuthContext = createContext({ 
    user:  null,
    login: (userData) => {},
    logout: () => {},

});


function authReducer(state, action){
   
    switch(action.type){
        case "LOGIN":
           
            return{
                ...state,
                user:  action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }

        default:
            return state;

    }
}

function AuthProvider(props){
    const [state, dispatch] = useReducer(authReducer, initState);
    function login(userData){
        window.localStorage.setItem("user", userData);
        dispatch({
            type: "LOGIN",
            payload: userData
        });

      
    }
        function logout(){
            window.localStorage.removeItem("user");
            dispatch({type:"LOGOUT"});
        }

        return (<AuthContext.Provider value={{user:state.user, login, logout}} {...props} />)
 
    
 }
export {AuthContext, AuthProvider};