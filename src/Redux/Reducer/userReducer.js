import { REGISTER_USER ,LOGIN_USER , ERROR } from "../actionType"

const initialState = {
    Register_Data:[],
    Login_Data:[],
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
            case LOGIN_USER :
                let Token = action.payload.data.token;
                localStorage.setItem("logintoken",JSON.stringify(Token));
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