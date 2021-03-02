import axios from "axios";
import CreateArea from "../CreateArea";
import Note from "../Note";
import AddIcon from '@material-ui/icons/Add';
import React ,{useState, useEffect,useContext }  from "react";

import {AuthContext} from "../context/auth";


function Notes(props){

    function populate(){
        axios.get("/api/note").then(res =>{
            if(res.data === "unauthorized")
            {
                logout();
                props.history.push("/login");
      
            }
            else{
                addNotes(res.data);
              
              
            }
    }).catch(err =>  {logout();   props.history.push("/login")})
}
   
    
    let [notes, addNotes] = useState([]);
    const {user, logout} = useContext(AuthContext);
    !user && props.history.push("/login");
    useEffect(() => {populate()}
, [notes]);

    function addEntry(note){
        axios.get("/api/note")
        .then(res =>addNotes(res.data))
        .catch(err => alert(err));
        
    }
    function Delete (_id){
     
        axios.post("/api/note/delete", {_id}).then(res =>{
           
            populate();
            
        }).catch(err => alert(err));
      
    }
    return( <div>
        <CreateArea  addNote={addEntry} />
        {notes.length >0 ? notes.map((item, index) => (<Note key={index} _id={item._id} color={item.color} title={item.title} date={item.createdAt} name="not" remind={item.reminder} img={item.image} content={item.content} onDelete={Delete} />)) :  <div className="text-center cl vertical-center" >
        <h2>Notes you add will appear here.</h2>
        <br/>
        <br/>
        <AddIcon fontSize='large'/>
        </div>}
    </div>
    );

}
export default Notes;