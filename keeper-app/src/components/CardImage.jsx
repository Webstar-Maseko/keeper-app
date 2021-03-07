import Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
 function CardImage(props)
 {

    let time = new Date();
    console.log(time.getMonth());
    return(<div>
            <Card  body className="tb text-center tc home-card" >
            <h2>
               <h1>Welcome</h1>This is Google Keep's poor cousin. Here you can store notes, set reminders, recover deleted notes and search notes...
            </h2>
            <br/>
            <a href="/login" className="btn btn-primary">Get Started</a>
       
            
            </Card>
           
            </div>
  )
}

export default CardImage;