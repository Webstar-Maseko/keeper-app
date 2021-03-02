import React, {useContext, useState} from "react";

import Header from "./Header";
import Footer from "./footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from "./SideNav";
import Notes from "./Routes/Notes";
import Reminder from "./Routes/Reminder";
import Bin from "./Routes/Bin";
import Login from "./Authentication/login";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { AuthContext} from "../components/context/auth";

function App() {
    const {user, logout} = useContext(AuthContext);
    let [result, setResult] = useState([]);
    

 return  (
  <Router> 
  
   <Header setResult={setResult}/>
<div className="main-content">
   <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route path={"/search"} render={(props) => (<Search {...props} results={result} />)} />
      <Route exact  exact path={"/"}  component={Home} />
        <Route path ={"/views"} render={({match :  {path}}) =>(
          <Row>
            <Col md={3} className="pl-0 pr-0">
              <SideNav />
            </Col>
            <Col md={9} className="pl-0 pr-0">
              <Switch>
                <Route exact path={path + "/"} component={Notes} />
                <Route exact path={path +"/reminder"}  component={Reminder} />
                <Route  exact path ={path +"/bin"}  component={Bin} />
                </Switch>

              </Col>
          </Row>

        )} />
      
       
        
</Switch>

 </div>
 <Footer/>

   </Router>

   
  
 )
}
export default App;
