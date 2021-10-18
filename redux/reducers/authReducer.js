import axios from 'axios'
import Cookie from 'js-cookie'

import{
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,

    Auth_Error,
    LOGOUT_SUCCESS
} from '../constants/authConstants'

export const newUserReducer = (state={ userInfo:[]}, action)=>{
    switch (action.type){
        case REGISTER_SUCCESS:
            return{
                ...state , userInfo: action.payload
            }

        
        case Auth_Error:
            return{
                ...state, error: action.payload
            }     

                   
        default: 
            return state    
    }
}

export const loginReducer = ( state={userInfo:[]}, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{
                userInfo: action.payload
            };
        case LOGOUT_SUCCESS:
            return{
                userInfo: action.payload
            };    
    
        default:
            return state    
    }
}