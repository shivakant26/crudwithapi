import { REGISTER_USER , LOGIN_USER , ERROR } from "../actionType";
import  instance  from "../../Utils/getApi";
import axios from "axios";

export const Register_user = (body) =>{
    return (dispatch) => {
        return instance.post('/signup', body)
            .then(data => {
                dispatch({
                    type:REGISTER_USER,
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    };
}
export const Login_user = (body) =>{
    return (dispatch) => {
        return instance.post('/signin', body)
            .then(data => {
                dispatch({
                    type:LOGIN_USER,
                    payload: data
                })
            })
           
            .catch(error => {
                dispatch({
                    type:"ERROR",
                    payload: error.response
                })
            });
    };
}