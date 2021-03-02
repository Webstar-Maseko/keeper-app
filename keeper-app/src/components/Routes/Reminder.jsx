import axios from "axios";
import React, {useEffect, useState,useContext} from "react";
import Note from "../Note";
import {AuthContext} from "../context/auth";


function Reminder( props){


    let [reminder, setReminder] = useState([]);
    const {user, logout} = useContext(AuthContext);
    !user && props.history.push("/login");
    
    function populate(){
        axios.get("/api/reminder").then(res =>{
            if(res.data === "unauthorized"){
                logout();
                props.history.push("/login");
            }
            else{
                setReminder(res.data);
            }
        }).catch(err => {alert(err); logout();   props.history.push("/login"); });

    }
    useEffect(() =>{
        populate();
       
    }, [reminder]);

    function Delete(_id) {

        axios.post("/api/reminder/delete", {_id})
        .then(res => 
           populate())
        .catch(err => 
            alert(err));
    }

    return (<div> 
    {reminder.length === 0 ? <div className="text-center cl vertical-center" >
    <h2>Your reminders will appear here....</h2> 
    </div> : reminder.map((item, index) => <Note key={index} _id={item._id} remind={item.reminder} color={item.color} onDelete={Delete} content={item.content} title={item.title} remin={item.reminder} /> ) }
    
    </div>)
}

export default Reminder;