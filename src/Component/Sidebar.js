import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    return(
        <div>
            <Link to="/dashboard/viewProfile">View Profile</Link>
            <Link to="/dashboard/createPost">Create Post</Link>
            <Link to="/dashboard/listPost">Show Post</Link>
            <Link to="/dashboard/updatePost">Update Post</Link>
            <Link to="/dashboard/deletePost">Destroy Post</Link>
            <Link to="/dashboard/setting">setting</Link>
            <Link to="/dashboard/Help">Help</Link>
        </div>
    )
}

export default Sidebar;