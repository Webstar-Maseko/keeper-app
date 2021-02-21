import React, {useContext} from "react";

import Header from "./Header";
import Footer from "./footer";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from "./SideNav";
import Notes from "./Routes/Notes";
import Reminder from "./Routes/Reminder";
import Bin from "./Routes/Bin";
import Login from "./Authentication/login";
import Home from "./Home";
import Search from "./Routes/Search";
import {BrowserRouter as Router,Redirect, Route, Switch} from "react-router-dom";
import {AuthProvider, AuthContext} from "../components/context/auth";

function App() {
    const {user, logout} = useContext(AuthContext);
    

 return  (
  <Router> 
   <Header/>
   <Switch>
      <Route exact path={"/login"} component={Login} />
      <Route path={"/search"} component={Search} />
        <Route path ={"/"} render={({match :  {path}}) =>(
          <Row>
            <Col md={3} className="pl-0">
              <SideNav />
            </Col>
            <Col md={9} className="pl-0">
              <Switch>
                <Route exact path={"/"} component={Notes} />
                <Route path={"/reminder"}  component={Reminder} />
                <Route  exact path ={"/bin"}  component={Bin} />
                </Switch>

              </Col>
          </Row>

        )} />
      
       
        
</Switch>
  
   <Footer/>
   </Router>
   
  
 )
}
export default App;
