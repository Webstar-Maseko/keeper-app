import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Light from "@material-ui/icons/EmojiObjects"
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Link, useRouteMatch} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";


function SideNav(){
  let {url} = useRouteMatch();
    return(<Navbar fixed expand="sm" className="pl-0 pt-0 ">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse aria-orientation="vertical" id="basic-navbar-nav">
       <Nav  variant='pills'  data-spy="affix"  defaultActiveKey={`${url}`} className="nav flex-column sticky myClass pt-1">
    <Nav.Item className="pb-0">
  <Nav.Link href={`${url}`}><i className="pr-3"><Light/></i> Notes </Nav.Link>
  </Nav.Item>

  <Nav.Item className="pb-0">
  <Nav.Link as={Link} to={`/reminder`} eventKey="link-1" > <i className="pr-3"> <NotificationsNoneIcon/> </i> Reminders</Nav.Link>
  </Nav.Item>

  <Nav.Item className="pb-0">
  <Nav.Link  as={Link} to={`/bin`}  eventKey="link-2"><i className="pr-3"><DeleteOutlineIcon/></i> Bin</Nav.Link>
  </Nav.Item>

</Nav>
</Navbar.Collapse>
</Navbar>)
}

export default SideNav;