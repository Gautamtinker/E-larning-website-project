import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Detail from "./Detail";
import Card from "./Card_Course";
import Teacher_profile from "./Teacher_profile";
import Student_profile from "./Student_profile";
import { useNavigate, useLocation } from "react-router-dom";
import "./public/my_profile.css"

function Profile(){

    const [userdata, setUserData] = useState({});
    const [person, setPerson] = useState("")

    const navigate = useNavigate();

    useEffect( ()=>{
        async function fetchData(){
            const res = await axios.get("/profile");
        
            if(res.data.userData == "Not Present"){
                console.log("cookie not present")
                navigate("/login");
              }

            console.log(res.data.userData);
            setUserData(res.data.userData);
            setPerson(res.data.person);
            console.log(person)
        }
        fetchData();
    }, [] )

    return<div>

       
        { 
        person == "teacher" ?
        <Teacher_profile userdata = {userdata} permission = "modify" />
          : 
        <Student_profile userdata = {userdata} />
        }

    </div>
}

export default Profile;