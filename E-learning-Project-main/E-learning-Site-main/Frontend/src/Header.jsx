import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <header><h1>Blogger</h1> <p > 
                <NavLink to = "/allcourse"> <button className="btn">All Course</button> </NavLink>   
                <NavLink to = "/login"> <button className="btn">Login</button> </NavLink> 
                <NavLink to = "/register"> <button className="btn">Register</button> </NavLink>
                <NavLink to = "/profile"> <button className="btn">Profile</button> </NavLink>
                </p> </header>
        </div>
    );
}

export default Header;