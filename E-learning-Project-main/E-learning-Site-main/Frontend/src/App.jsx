import AllCourse from "./AllCourse";
import {Route, Routes} from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import Profile from "./profile";
import SeeProfile from "./SeeProfile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path="/login" element = {<Login />} />
          <Route path="/allcourse"  element = {<AllCourse />} />  
          <Route exact path = "" element = {<Register />} />
          <Route path = "register" element = {<Register />} />
          <Route path = "profile" element = {<Profile />} />
          <Route path = "seeProfile" element = {<SeeProfile />} />
        </Routes>

      
      
    </div>
  );
}

export default App;
