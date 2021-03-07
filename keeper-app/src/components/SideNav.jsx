import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Light from "@material-ui/icons/EmojiObjects"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Link, useRouteMatch} from "react-router-dom";
import Badge from "@material-ui/core/Badge";



function SideNav(props){
  let {url} = useRouteMatch();
    return(<Navbar fixed expand="md" className="pl-0 pt-0 pr-0 ">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse aria-orientation="vertical" id="basic-navbar-nav">
       <Nav  variant='pills'  data-spy="affix"  defaultActiveKey={`${url}`} className="nav flex-column sticky myClass pt-1">
    <Nav.Item className="pb-0">
  <Nav.Link href={`${url}`}><i className="pr-3"><Light/></i> Notes </Nav.Link>
  </Nav.Item>
  <Nav.Item className="pb-0">
  
  <Nav.Link as={Link} to={`${url}/reminder`} eventKey="link-1" >
    <i className="pr-3"> 
  <Badge color="secondary" badgeContent={props.count}>

  <NotificationsNoneIcon/> 
  </Badge> 
  </i> Reminders
   </Nav.Link>
  </Nav.Item>

  <Nav.Item className="pb-0">
  <Nav.Link  as={Link} to={`${url}/bin`}  eventKey="link-2"><i className="pr-3"><DeleteOutlineIcon/></i> Bin</Nav.Link>
  </Nav.Item>

</Nav>
</Navbar.Collapse>
</Navbar>)
}

export default SideNav;