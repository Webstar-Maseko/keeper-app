import react, {useState, useEffect} from "react";
import Note from "../Note";
import Notes from "./Notes";
import axios from "axios";




function Search(){
    let [items, setItems] = useState([]);
    axios.get("/api/search/").then(res => setItems(res.data))
 

    return(<> {items!== undefined&& items.length > 0 ? items.map((item, index)=>(<Note key={index} _id={item._id} content={item.content} title={item.title}  color={item.color} onDelete={Notes.delete(item._id)} name="not" remind={item.reminder} img={item.image}  />))  :  <div className="text-center vertical-center" >
    <h2>Start typing to search...</h2>
    </div>} </> )
}


export default Search;