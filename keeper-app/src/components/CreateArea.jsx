import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import PaletteIcon from '@material-ui/icons/Palette';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import axios from "axios";

 


function CreateArea(props) {
    let [note, setNote] = useState({title: "", content:"",color:"#ffffff", image:""});
    let bg={backgroundColor: note.color}; 

    function handleChange(event){
        let {name,value} = event.target;
        setNote((x) =>{return {...x,[name]: value}; }); 
        event.preventDefault();
       
    }
    function handlePic(event){
      setNote(x => {return {...x, image:event.target.files[0]}});
      console.log(note.image);
      event.preventDefault();
     
    }

    function createNote(x){
      x.preventDefault();
      const formData = new FormData();
      formData.append('title', note.title);
      formData.append('content', note.content);
      formData.append('image', note.image);
      formData.append('color', note.color);
      axios.post("/api/note",formData).then(res => {

        props.addNote(note); 
        setNote(
          {title: "",
           content:"",
           color:"#ffffff",
        image:""});
           
      }).catch(err => console.log(err));
    }
  
  return (
    
    <div>
      <form className="create-note"  style={bg} encType="multipart/form-data">

        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={note.title} 

        />
        <br/>
        <textarea  
        onChange={handleChange} 
        name="content"
         placeholder="Take a note..." 
         rows="3" value ={note.content}
         className={note.title === "" ? "d-none" : ""} />
         <div className="input-color-container"> 
         <input type="color" name="color"   onChange={handleChange} value={note.color} id="create-inp" />
         <input type="file" accept=".png, .jpg, .jpeg" name="image" onChange={handlePic}  id="img-up"/>
         </div>
         <div className={note.title === "" ? "d-none" : "cont"}>
            <label className="btn" data-toggle="tooltip" title="select note background color"  htmlFor="create-inp"><PaletteIcon/></label>
            <label className="btn" htmlFor="img-up"><InsertPhotoIcon/></label>
            
         </div>
         <div className={note.title === "" ? "d-none" :"disp"}>
                
                {note.image !== "" && <img className="prev" src={URL.createObjectURL(note.image)} alt=""/>}
             
          </div>
        
        <Fab  className={note.title === "" ? "d-none" : ""} type="submit" 
        onClick={createNote}>
                   <AddCircleIcon />
                 </Fab>    
      </form>
      
    </div>
  );
}

export default CreateArea;
