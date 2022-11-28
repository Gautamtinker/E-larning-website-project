import {useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Teacher_profile from "./Teacher_profile";

function SeeProfile(){

    const {state} = useLocation();
    const email = state.email;
    const [userdata, setUserdata] = useState({})

    useEffect( ()=>{
        async function fetchTeacher(){
            const res = await axios.post("/profile", {goal : "oneTeacher", email : email} )
            console.log(email);
            setUserdata(res.data);
        }
        fetchTeacher();
    } , [] )
    
    return <div>
        <Teacher_profile userdata = {userdata} permission = "read" />       
    </div>
}

export default SeeProfile;