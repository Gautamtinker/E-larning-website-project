import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Detail(props){

    const navigate = useNavigate();

    async function handleClick_logout(){
        const logout = {logout : "true"};
        const res = await axios.post("/logout", logout);
        console.log(res.data);
        navigate("/login");
      }

    return <div className="details">

        <button className="btn" onClick={props.handleClick_search}> New Courses </button> 
        
        <button className="btn" onClick={handleClick_logout}> Logout </button>

        <p > Name : {props.name} <br />
         Email : {props.email} </p>
    </div>

}

export default Detail;