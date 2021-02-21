import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

import SetReminder from "./modals/ReminderUpdate";
import AccessTimeIcon from '@material-ui/icons/AccessTime';



function Note(props) {
  let [hide, setVis] = useState(false)
  let bg={backgroundColor: props.color};

  
    return (
     
      
      <div className="note" style={bg} onMouseEnter={() =>setVis(true)} onMouseLeave={() =>setVis(false)} >
      {props.img === undefined ? null: <img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`} alt=""/>}

        <h1>{props.title}</h1>
        <p>{props.content}</p>
        {(props.name !=="bin" && props.remind !== undefined || null) ? <p className="time btn-outline-secondary"><AccessTimeIcon/>  {(props.remind.date).substring(0,16).replace("T", " ")}, {props.remind.label} </p>: null}
        
        <button className={hide ? undefined: "d-none"} data-toggle="tooltip" title="Delete note" onClick={() => props.onDelete(props._id)}>
          <DeleteIcon />
        </button>
        {props.name === "bin" && <button className={hide ? "rest": "d-none"} data-toggle="tooltip" title="Restore note" onClick={()=> props.restore(props._id)} > <RestoreIcon/> </button>}
        {hide ? <SetReminder  _id={props._id} />: undefined }
      </div>
    );
  }
  
  export default Note;