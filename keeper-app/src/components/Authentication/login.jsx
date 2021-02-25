import {React, useState, useContext} from "react";
import HeadAv from "../headAv";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from  'react-bootstrap/Form';
import axios from "axios";
import Error from "../error";
import {AuthContext} from "../context/auth";


function Login(props){
    const context = useContext(AuthContext);
    let [reg, setReg] = useState(true);
    let [err, setErr] = useState("");
    let [loading, setLoad] = useState(false);
    let [user, setUser] = useState({username: "", password:"", confirmPwd:""})
 

    function typeReg(e){
        e.preventDefault();
       
        if(e.target.innerText === "Login"){
           setReg(true);
        }
        else{
            setReg(false);
        }
    }
    function handleChange(event){
        let{name, value} = event.target;
        if(value === ""){
            setErr(x => "");
        }

        setUser(x =>{return { ...x, [name]: value}});

    }
    function authenticated(e){
        e.preventDefault();

       //
      let trigger = e.target.innerText;
      setLoad(true);

      if(trigger === "Login"){
         
        if(user.username !== ""){
            axios.post("/api/user/login", user).then(res => {
       
                context.login(res.data);
               props.history.push("/");
             }).catch(err =>{ setErr("username or password is unrecognized"); setLoad(false);});
        }
        else{
            setErr("username cannot be empty");
            setLoad(false);
        }
          
      }
      else{
          if(user.password === user.confirmPwd){
            axios.post("/api/user/register", user).then(res => {
             
                if(res.data.name === undefined){
                    context.login(res.data);
                    props.history.push("/");
               
                }
                else{
                    setErr(res.data.message);
                    setLoad(false);
  
                }
               });

          }else{
              setErr("Passwords don't match.");
              setLoad(false);
          }
         
      }
    }
    return (
     
       <Row className="pt-5">
       <Col md={4}>
       </Col>
       <Col md={4}>
        <Card className="shadow">
            <Card.Header className="bg-white">
            <div className="text-center">
                <div className="ml-auto mr-auto"> 
                <HeadAv/>
                </div>
                <br/> 
                <h2>{reg ? "Login": "Register" }</h2>
            </div>
            </Card.Header> 
            <br/>
           {err !== "" && <Error message={err}/> }      
        <Card.Body  className="text-center">
            <Form >
                <Form.Control onChange={handleChange}  placeholder="Username"  name="username" type="email"/>
                <br/>
                <Form.Control  onChange={handleChange} placeholder= "Password" name="password" type="password"/>
                <br/>
                {reg === false && <Form.Control  onChange={handleChange} name="confirmPwd"  placeholder= "Confirm Password" type="password" ></Form.Control>  }
                <br/>
                <Button type="submit" className="bg-success" disabled={loading} onClick={loading ? null: authenticated} block> {loading ? "loading..": reg ? "Login": "Register"}</Button>
           </Form>
           <h5>OR</h5>
           <Button type="submit" disabled={loading} onClick={typeReg} className={ reg ? "bg-danger" :"bg-primary"} id="btnLog" block> {reg ? "Register": "Login"} </Button>
        </Card.Body>
          
        </Card> 
        </Col>
        <Col md={4}></Col>
        </Row>
    );
}

export default Login;