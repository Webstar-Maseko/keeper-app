import {useContext} from "react";
import Note from "../Note";
import axios from "axios";

import {AuthContext} from "../context/auth";



function Search(props){
    
    const {user, logout} = useContext(AuthContext);
    !user && props.history.push("/login");
    let items = props.results;
    function Delete (_id){
        
        axios.post("/api/note/delete", {_id}).then(res =>{
           alert("Successfully deleted");
           props.history.push("/");
             
        }).catch(err => alert(err));
      
    }
  
    return(<> {items!== undefined&& items.length > 0 ? items.map((item, index)=>(<Note key={index} _id={item._id} content={item.content} title={item.title}  color={item.color} onDelete={Delete} name="not" remind={item.reminder} img={item.image}  />))  :  <div className="text-center vertical-center" >
    <h2>Start typing to search...</h2>
    </div>} </> )
}


export default Search;