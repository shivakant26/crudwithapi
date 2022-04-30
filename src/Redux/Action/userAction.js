import { REGISTER_USER , LOGIN_USER , ERROR, CREATE_POST ,SHOW_POST ,DELETE_POST ,UPDATE_POST,SINGLE_POST_SHOW} from "../actionType";
import  instance  from "../../Utils/getApi";

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
                    type:ERROR,
                    payload: error.response
                })
            });
    };
}

export const create_post = (body) =>{
    return (dispatch) => {
        return instance.post('/posts', body)
            .then(data => {
                dispatch({
                    type:CREATE_POST,
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
export const show_post = () =>{
    return (dispatch) => {
        return instance.get('/posts')
            .then(data => {
                dispatch({
                    type:SHOW_POST,
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
export const delete_post = (id) =>{
    return (dispatch) => {
        return instance.delete(`/posts/${id}`)
            .then(data => {
                dispatch({
                    type:DELETE_POST,
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
export const single_post = (id) =>{
    return (dispatch) => {
        return instance.get(`/posts/${id.id}`)
            .then(data => {
                dispatch({
                    type:SINGLE_POST_SHOW,
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
export const update_post = (id,obj) =>{
    return (dispatch) => {
        return instance.put(`/posts/${id.id}`,obj)
            .then(data => {
                dispatch({
                    type:UPDATE_POST,
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