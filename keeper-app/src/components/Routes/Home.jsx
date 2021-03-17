import React, {useContext} from "react";
import {AuthContext} from  "../context/auth";


function Home(props){
    let {user, logout} = useContext(AuthContext);
  
 {user && props.history.push("/views")}
    return(
        <div className="home">
            <h2>
               <h1>Welcome</h1>This is Google Keep's poor cousin. Here you can store notes, set reminders, recover deleted notes and search notes...
            </h2>
            <br/>
            <a href="/login" className="btn btn-primary">Get Started</a>
           
        </div>
     
    )
}

export default Home;