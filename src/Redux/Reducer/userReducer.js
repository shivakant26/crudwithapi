import { REGISTER_USER ,LOGIN_USER , ERROR, CREATE_POST ,SHOW_POST ,DELETE_POST } from "../actionType"

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
            }
            break;
            case CREATE_POST :
            return{
                ...state,
                Post:action.payload,
            }
            break;
            case SHOW_POST :
            return{
                ...state,
                showPost:action.payload,
            }
            break;
            case DELETE_POST :
            return{
                ...state,
                showPost:action.payload,
            }
            break;
            case LOGIN_USER :
                let Token = action.payload.data.token;
                localStorage.setItem('logintoken',Token);
            return{
                ...state,
                Login_Data:action.payload,
            }
            break;
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