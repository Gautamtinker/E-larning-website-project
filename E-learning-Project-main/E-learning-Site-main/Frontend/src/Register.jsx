import userEvent from "@testing-library/user-event";
import { useState } from "react";
import Register_Student from "./Register_Student";
import Register_Teacher from "./Register_Teacher";

function Register(){

    const [user, setUser] = useState("Stu");

    return <div>
        <center>
        <div className="home">
            <br/>
            <h2>Register as</h2>
            <br/>
            <center>
                <button onClick={()=>{setUser("Student")}}> Student </button>
                <button onClick={ ()=>{setUser("Teacher")} } > Teacher </button>
            </center>
        </div>
        
        {
            ( user == "Student" ) ? <Register_Student /> : <Register_Teacher />
        }

        </center>
    </div>

}

export default Register;