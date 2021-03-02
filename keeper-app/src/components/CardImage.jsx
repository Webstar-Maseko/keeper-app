import Card  from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";



 function CardImage(props)
 {
    return(<CardGroup >
            <Card className="home-card" >
                <Card.Img src={`${process.env.PUBLIC_URL}/assets/images/${props.img}`}/>
            </Card>
            <Card  body className="text-left tb text-white home-card" >
            <h4>
                {props.msg}
            </h4>
            <br/>
      
            <a href="/login" className="btn btn-primary">Get Started</a>
            </Card>
    </CardGroup> )
}

export default CardImage;