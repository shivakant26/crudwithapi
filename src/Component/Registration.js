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
    const response = useSelector((state)=>state.userReducer.Register_Data)
    // const response_error = useSelector((state)=>state.userReducer.Error.data.errors);

    // console.log(121212121,response_error)
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();


      const Register = (data) => {
          let regobj = {user:data}
        //   console.log(regobj);
          dispatch(Register_user(regobj))
          if(response?.status == 200){
            toast("Register successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }
      };


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