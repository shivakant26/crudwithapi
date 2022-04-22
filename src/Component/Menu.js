import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
        </div>
    )
}


export default Menu;