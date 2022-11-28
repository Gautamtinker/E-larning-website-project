import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateArea from "./CreateArea"
import Detail from "./Detail"
import Note from "./Note";

function Teacher_profile(props){
    
    var userdata = props.userdata;
    const [arr, setArr] = useState([]);
    
    console.log(userdata)

    useEffect( ()=>{
        if(userdata.Courses) setArr(userdata.Courses)
    } , [userdata.Courses] )
    
    const navigate = useNavigate();

    async function submit(data){
        setArr( (prev)=>{
            return [
                ...prev,
                data
            ]
        } )        

        const res = await axios.post("/profile", {goal : "add", "data" : data, "email" : userdata.teacher_id } );
        //navigate("/profile");
        console.log(data);

    }
    
    async function delet(id){

        console.log("in delet ")
        setArr( (prev)=>{
            return prev.filter( (ele , ind)=>{
                return id != ind
            } )
        } )

        const resp =  await axios.post("/profile", {goal : "del", "data" : arr[id], "email" : userdata.teacher_id } )

    }
    
    return<div>

        <Detail
        name = {userdata.Name} 
        email = {userdata.teacher_id} />

        {props.permission == "modify" && <CreateArea click = {submit} />}
        
        <div className="allblog">
            <h2> Courses </h2>

        { arr.map( (ele,ind)=>{
            return <Note 
            key = {ind}
            id = {ind}
            del = {delet}
            title =  {ele.title}
            content = {ele.content}
            permission = {userdata.permission}
            />

        } ) }

        </div>
        

    </div>
}

export default Teacher_profile