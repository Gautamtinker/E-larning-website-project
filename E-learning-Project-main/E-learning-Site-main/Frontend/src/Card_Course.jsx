import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "./Card_Course.css"

function Card(props) {
/*
    const navigate = useNavigate();
  function handleClick_profile(){
    
    axios.post("/profile",{email:props.email}).then( async  res=>{
        const {name , email, arr} = res.data;
        const userData = { name : name, email : email, arr : arr };
        navigate("/seeProfile", {state:{userData : userData, my_email : props.myEmail}})
        console.log(name);
  } );
  }
*/
    return (
      <div className="card">
        <div className="top">
          <h3 className="name" >{props.title}</h3>
          
        </div>
        <div className="bottom"> 
          <p className="info"> {props.content} </p>
        </div>
          <button className=" btn" onClick={()=>{ props.click(props.email) }} >{props.button_text}</button>
      </div>
    );
  }
  
  export default Card;
  