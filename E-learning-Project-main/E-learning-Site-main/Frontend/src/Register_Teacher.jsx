import "./public/styles.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";

function Register_Teacher() {

    const [ registerData, setRegisterData] = useState({
        person : "teacher",
        name : "",
        subject : "",
        email : "",
        password : "",
        c_password : "",
    });
    const [status, setStatus] = useState("");


    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        setRegisterData( (prev)=>{
            return {
                ...prev,
                [name] : value
            }
        } )

    }

    function handleClick(event){

        const {name, subject, email, password, c_password } = registerData;

        if (name == "" || subject == ""  || email == "" || password == "" || c_password == "") 
        {
            setStatus("Fill All fields");
            return;
        }

        console.log(registerData);

        axios.post("/register",registerData).then( res=>{
            //userData = res.data;
            
            console.log(res.data.message);
            setStatus(res.data.message);
        } )
        //navigate("/profile")

        setRegisterData({
            person : "teacher",
            name : "",
            subject : "",
            email : "",
            password : "",
            c_password : "",
        })

        event.preventDefault();

    }


    return (
        <div>
            <center>
                <div className="home" >
                <center> <br/><h1><u>Sign Up</u></h1>
                <br/>
                <h3>Teacher</h3>
                <br/><br/>
                <h3>{status}</h3>
            </center>
    
        <center>

        
        <input  name="name" placeholder="Name" onChange={change} value = {registerData.name}/>  <br/><br/>
        <input  name="subject" placeholder="Sbject" onChange={change} value = {registerData.subject}/>  <br/><br/>
        <input name = "email" placeholder="Email" onChange={change} value = {registerData.email}/> <br/><br/>
        <input name = "password" placeholder = "Password" onChange={change} value = {registerData.password}/> <br/><br/>
        <input name="c_password" placeholder="Confirm Password" onChange={change} value = {registerData.c_password} /> <br/><br/>
        <button className="btn" type="submit" onClick={handleClick}> submit </button>
        <br/><p>or</p><br/>
    
    <a href = "/login"> <button className="btn2">Sign In</button></a>
    
</center>
  
 </div>
</center>
        </div>
    );
}

export default Register_Teacher;