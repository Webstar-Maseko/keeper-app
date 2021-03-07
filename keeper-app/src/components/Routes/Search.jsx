import {useContext, useState} from "react";
import Note from "../Note";
import axios from "axios";
import {AuthContext} from "../context/auth";
import FeedBack from "../modals/feedback";
function Search(props){
    
    const {user, logout} = useContext(AuthContext);
    let [open, setOpen] = useState(false);

    !user && logout();
    let items = props.results;
    function Delete (_id){
        
        axios.post("/api/note/delete", {_id}).then(res =>{
           alert("Successfully deleted");
           props.history.push("/views");
        }).catch(err => alert(err));
      
    }
  
    return(<div> {items!== undefined&& items.length > 0 ? items.map((item, index)=>(<Note key={index} _id={item._id} content={item.content} title={item.title}  color={item.color} onDelete={Delete} name="not" remind={item.reminder} img={item.image}  />))  :  <div className="text-center cl vertical-center" >
    <h2>Start typing to search...</h2>
    </div>} </div> )
}


export default Search;