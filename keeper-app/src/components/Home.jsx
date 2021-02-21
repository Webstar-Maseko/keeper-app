
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from "./SideNav";
import Notes from "./Routes/Notes";
import Reminder from "./Routes/Reminder";
import Bin from "./Routes/Bin";



import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Home(){

    return(
        <Row>
        <Col md={3} className="pl-0">
            <SideNav />
        </Col>
        <Col md={9} className="pl-0">
        <Switch>
        <Route exact  path="/" component={Notes} />
        <Route path="home/reminder"  component={Reminder} />
        <Route  exact path ="home/bin" component={Bin} />
  
    </Switch>
    </Col>
    </Row>
    )
}

export default Home;