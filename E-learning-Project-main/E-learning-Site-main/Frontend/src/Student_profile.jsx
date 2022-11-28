import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateArea from "./CreateArea"
import Detail from "./Detail"
import Card_Course from "./Card_Course";

function Student_profile(props){
    
    var userdata = props.userdata;
    
    const [teacher, setTeacher] = useState([]);
    
    const navigate = useNavigate();

    useEffect( ()=>{
        async function fetchTeacher(){
        const res = await axios.post("/profile", {goal : "teacher" });
        //const data =await res.json();
        setTeacher(res.data);
        console.log(teacher);
        }

        fetchTeacher();

    },[] )

    function click(email){
        console.log("clickkk " + email)
        navigate("/seeProfile", {state : {email : email}})
    }
    
    return<div>

        <Detail
        name = {userdata.Name} 
        email = {userdata.Stu_id} />      

        <h1>Teachers </h1>
        {console.log(teacher)}
        { teacher.map( (ele, ind)=>{
            return <Card_Course 
            key = {ind}
            title = {ele.Name} 
            content = {ele.subject}
            button_text = "See profile"
            click = {click}
            email = {ele.teacher_id}
            />
        } )  }  

    </div>
}

export default Student_profile;