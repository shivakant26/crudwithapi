import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Register_user } from "../Redux/Action/userAction";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const Registration  = () =>{
    const dispatch = useDispatch();
    const response = useSelector((state)=>state.userReducer)
    // console.log(12222,response?.Register_Data?.data?.message);
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();


      const Register = (data) => {
          let regobj = {user:data}
          dispatch(Register_user(regobj))
          if(response?.Error?.status === 400){
            if(response?.Error?.data?.errors[0]){
                alert(`${response?.Error?.data?.errors[0]}`)
            }if(response?.Error?.data?.errors[1]){
                alert(`${response?.Error?.data?.errors[1]}`)
            }if(response?.Error?.data?.errors[2]){
                alert(`${response?.Error?.data?.errors[2]}`)
            }if(response?.Error?.data?.errors[0] && response?.Error?.data?.errors[1] && response?.Error?.data?.errors[2]){
                alert(`${response?.Error?.data?.errors[0]} or ${response?.Error?.data?.errors[1]}`)
            }
          }else{
              if(response?.Register_Data?.status === 200){
                  alert(`${response?.Register_Data?.data?.message}`)
              }
          }
          }

    return(
        <div>
            <div>
            <form onSubmit={handleSubmit(Register)}>
                <div className="form-inner">
                <div className="form-field">
                        <h3>SignUp Here:</h3>
                    </div>
                    <div className="form-field">
                        <input type="text"
                         placeholder="test1@gmail.com"
                         {...register("email", {
                            required: true,
                          })} 
                         />
                         {errors?.email?.type === "required" && <p className="error">Email required *</p>}
                    </div>
                    <div className="form-field">
                        <input type="text"
                         placeholder="Password"
                         {...register("password", {
                            required: true,
                          })} 
                         />
                         {errors?.password?.type === "required" && <p className="error">password required *</p>}
                    </div>
                    <div className="form-field">
                        <input type="text" 
                        placeholder="Confirm Password"
                        {...register("password_confirmation", {
                            required: true,
                          })} 
                        />
                        {errors?.password_confirmation?.type === "required" && <p className="error">Confirm Password required *</p>}
                    </div>
                    <div className="form-field">
                        <Button type="submit" variant="primary" className="login-btn">Register</Button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Registration;