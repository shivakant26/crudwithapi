import { REGISTER_USER ,LOGIN_USER , ERROR, CREATE_POST ,SHOW_POST ,DELETE_POST, SINGLE_POST_SHOW ,UPDATE_POST } from "../actionType"

const initialState = {
    Register_Data:[],
    Login_Data:[],
    Post:[],
    Error:[]
}


const userReducer = (state=initialState,action) =>{
    switch(action.type){
        case REGISTER_USER :
            return{
                ...state,
                Register_Data:action.payload,
                Error:[]
            }
            case CREATE_POST :
            return{
                ...state,
                Post:action.payload,
                Error:[]
            }
            case SHOW_POST :
            return{
                ...state,
                showPost:action.payload,
                Error:[]
            }
            case DELETE_POST :
            return{
                ...state,
                deletePost:action.payload,
                Error:[]
            }
            case UPDATE_POST :
            return{
                ...state,
                updatePost:action.payload,
                Error:[]
            }
            case SINGLE_POST_SHOW :
            return{
                ...state,
                singlePost:action.payload,
                showPost:"",
                Error:[]
            }
            case LOGIN_USER :
                let Token = action.payload.data.token;
                localStorage.setItem('logintoken',Token);
            return{
                ...state,
                Login_Data:action.payload,
                Error:[]
            }
            case ERROR:
                return{
                    ...state,
                    Error:action.payload
                }
            default:
                return state
    }
}


export default userReducer;