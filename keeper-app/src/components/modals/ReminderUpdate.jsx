import AddAlertIcon from '@material-ui/icons/AddAlert';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import axios from "axios";



function SetReminder(props) {
    const [show, setShow] = useState(false);
    let [reminder, setReminder]= useState({date:"", label:"",_id: props._id})
  
    const handleClose = () =>{
        axios.post("/api/reminder/",reminder)
        .then(res => { 
            alert(res.data); 
            setShow(false);
        })
        .catch(err => alert(err))
      
        };
    const handleShow = () => setShow(true);

    function handleChange(e){
        let {name, value} = e.target;
        setReminder( x => {return {...x, [name]: value}})
    }
  
    return (
      <>
        <button onClick={handleShow}>
       <AddAlertIcon/>
        </button>
  
        <Modal show={show} onHide={ ()=> setShow(false)}  backdrop="static" keyboard={true}>
          <Modal.Header closeButton>
            <Modal.Title>Set your reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form> 
              <input name="date" value={reminder.date} onChange={handleChange} type="datetime-local"  />
              <input name="label" value={reminder.label} onChange={handleChange} placeholder="text for your reminder"/>
            </form>
 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ ()=> setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
             Set Reminder
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default SetReminder;