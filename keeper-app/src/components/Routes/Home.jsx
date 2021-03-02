import React from "react";
import CardImage from "../CardImage";
import Carousel from 'react-bootstrap/Carousel';


function Home(){
  
  

    return(
        <div className="home text-center pt-5">
        <Carousel className="pl-5 pr-5 pb-5">
            <Carousel.Item><CardImage img="log.jpg" msg="You need to register or login to access or create notes" />  </Carousel.Item>
            <Carousel.Item   ><CardImage img="note.jpg" msg="Create your notes. Add custom background color and also upload images along with content. You can set reminders after creating a note." />  </Carousel.Item>
            <Carousel.Item><CardImage img="reminder.jpg" msg="View all your created reminders under one tab. You can permanetly delete notes with reminders from this tab. Notes deleted from reminders won't go into the bin." />  </Carousel.Item>
            <Carousel.Item><CardImage img="bin.jpg" msg="Notes deleted from the notes tab are automatically moved to the bin, here you can permanetly delete notes or restore them." />   </Carousel.Item>
        
        </Carousel>
        <br/>
           
        </div>
     
    )
}

export default Home;