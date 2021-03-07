import React, {useContext} from "react";
import CardImage from "../CardImage";
import {AuthContext} from  "../context/auth";


function Home(props){
    let {user, logout} = useContext(AuthContext);
  
 {user && props.history.push("/views")}
    return(
        <div className="home text-center pt-5 pl-5 pr-5">
            <CardImage/>
           
        </div>
     
    )
}

export default Home;