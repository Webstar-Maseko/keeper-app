import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import Note from "../Note";
import {AuthContext} from "../context/auth";


function Bin(props){
    let [deletedNotes, setDeleted] = useState([]);
    const {user, logout} = useContext(AuthContext);
    !user && props.history.push("/login");

    useEffect(() =>{
    axios.get("/api/bin",{withCredentials:true}).then(res =>{
        if(res.data === "unauthorized"){
            props.history.push("/login");
        }
        else{
            setDeleted(res.data);
        }

    }).catch();

});


    function Delete (_id){
    
        axios.post("/api/bin/delete", {_id}).then(res =>{
          
            setDeleted(res.data);
        }).catch(err => console.log(err));
      
    }
    function Restore(_id){
        axios.post("/api/bin/restore", {_id}).then(res => setDeleted(res.data))
        .catch(err => console.log(err));
    }



    return (<div>
        {deletedNotes.length >0 ? deletedNotes.map((item, index) => (<Note key={index} _id={item._id} title={item.title} date={item.createdAt} name="bin" color={item.color} img={item.image} restore={Restore} content={item.content} onDelete={Delete} />)) : 
     <div className="text-center vertical-center" >
    <h2>Deleted notes will appear here</h2></div>}
    </div>)
}

export default Bin;