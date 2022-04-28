import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Login_user } from "../Redux/Action/userAction";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const login_response = useSelector((state)=>state.userReducer)
    console.log(323232,login_response);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();


      const Login = (data) => {
          let logindata = {user:data}
          dispatch(Login_user(logindata))
          if(login_response?.Error?.status === 400 ){
              toast.error(`${login_response?.Error?.data?.errors[0]}`,
           {position: toast.POSITION.TOP_RIGHT})
          }else{
            if(localStorage.getItem("logintoken")){
                toast.success(`${login_response?.Login_Data?.data?.message[0]}`,
           {position: toast.POSITION.TOP_RIGHT})
                window.location.href = "/dashboard";  
               }
          }    
      };
    useEffect(()=>{

    },[login_response])
    return (
        <div>
            <form onSubmit={handleSubmit(Login)}>
                <div className="form-inner">
                <div className="form-field">
                        <h3>Login:</h3>
                    </div>
                    <div className="form-field">
                        <input type="text"
                         placeholder="User_name"
                         {...register("email", {
                            required: true,
                          })} 
                         />
                         {errors?.email?.type === "required" && <p className="error">Username required *</p>}
                    </div>
                    <div className="form-field">
                        <input type="text" 
                        placeholder="Password"
                        {...register("password", {
                            required: true,
                          })} 
                        />
                        {errors?.password?.type === "required" && <p className="error">Password required *</p>}
                    </div>
                    <div className="form-field">
                        <Button type="submit" variant="primary" className="login-btn">Login</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Login;