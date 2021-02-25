
import React,{useContext, useState} from "react"
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {AuthContext} from "./context/auth";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Avatar from "@material-ui/core/Avatar";
import {withRouter} from "react-router-dom";
import axios from "axios";
function Header(props){

    let[search, setSearch] =useState("");
  
    const {user, logout} = useContext(AuthContext);
  
    function handleSubmit(value){
        if(value  !== ""){
            axios.post("api/search/",{value})
            .then(res => props.setResult(() => res.data ))
            .catch(err => {alert(err); logout(); props.history.push("/login")});
        }
        else{
            props.setResult(x => []);
        }
        
    }

    function handleChange(event){
        let{value} = event.target;
        setSearch(() => value, handleSubmit(value));
 
    }
    function show(){
       props.history.push("/search");
    }
    function revert(){
       setSearch(x => "");
       props.setResult(x => [])
        props.history.push("/");
        
    }
  
    return  (<header><Navbar bg="none" expand="md">
    <Navbar.Brand ><h1>Keeper </h1> </Navbar.Brand>  
  
     <Navbar.Toggle aria-controls="header" />
     { user && <>
     <Navbar.Collapse id="header">
    <Form inline  > 
    <InputGroup className="search"  >
        <FormControl   onFocus={show} name="txtSearch" value={search} onChange={handleChange} type="text" placeholder="search" />
        <InputGroup.Append> <Button variant="outline"   onClick={revert} style={{backgroundColor:  "#fff"}}>X</Button> </InputGroup.Append>
    </InputGroup> 
    </Form> 
    
    <NavDropdown className=" ml-auto mr-auto p-0" title={<Avatar/>} id="collasible-nav-dropdown" >
        <NavDropdown.Item > Welcome {user} </NavDropdown.Item>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item> 
        </NavDropdown>
    </Navbar.Collapse>
</>
    } 
    </Navbar>
  
    </header>)
}


export default withRouter(Header);