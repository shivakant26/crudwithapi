import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        },3000)
    },[])

    return(
        <div>
            <h1>404 PageNotFound</h1>
            <p className="errormsg">Please wait 3 second....<br/>
            Page automatic Redirect to Home Page</p>
        </div>
    )
}


export default PageNotFound;