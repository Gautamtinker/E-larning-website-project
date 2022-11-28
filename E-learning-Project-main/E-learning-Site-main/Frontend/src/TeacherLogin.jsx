import axios from 'axios';

function TeacherLogin() {

    async function send(){
        const res = await axios.post("stu-register", {
            person : "student",
            email : "email2",
            password : "pass",
            c_password : "pass"
        });
        const resp = await res.data
        console.log(resp);
    }

    return (
      <div>        
        <button onClick={ send }> Send </button>
      </div>
    );
  }
  
  export default TeacherLogin;
  