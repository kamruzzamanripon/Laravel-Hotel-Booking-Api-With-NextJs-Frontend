import Cookie from 'js-cookie'
import axios_auth_header from '../../util/axios_auth_header'
import axios from 'axios'
import {toast} from 'react-toastify'




import{
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,

    Auth_Error
} from '../constants/authConstants'



export const newUserAction = (new_userInfo, router, confirm_message)=> async(dispatch)=>{
    
    try{
        
        const formData = new FormData();
        formData.append('name', new_userInfo.name)
        formData.append('email', new_userInfo.email)
        formData.append('password', new_userInfo.password)
        formData.append('password_confirmation', new_userInfo.password_confirmation)
        formData.append('image', new_userInfo.picture)
        //console.log([...formData])
        const data = await axios.post(`${process.env.baseUrl}/register`, formData)
        console.log(data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.data
        })
        await toast.success(confirm_message)
        await router.replace('/login')
    }catch(errors){
        console.log(errors.response)
        dispatch({
            type: Auth_Error,
            payload: errors.response.data
        })
    }
}

export const loginAction = (loginData, router)=>async(dispatch)=>{
    try{
               
        //await axios.get(`http://127.0.0.1:8000/sanctum/csrf-cookie`)
         
        const data = await axios.post(`${process.env.baseUrl}/login`, loginData)

        const token = data.data.access_token
        const {user_info} = data.data
        Cookie.set("snactum_frontend",  token)
        Cookie.set("user_info",  JSON.stringify(user_info))
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
        
        await router.replace('/')
       
         
           
        //console.log(data)
        //console.log(user_info)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data
        })
    }catch(errors){
        console.log(errors.response)
        dispatch({
            type: Auth_Error,
            payload: errors.response
        })
    }
}


export const logoutAction = (router)=> async(dispatch)=>{
    try{
        const data = await axios_auth_header().post(`${process.env.baseUrl}/logout`)

        Cookie.remove('snactum_frontend')
        Cookie.remove('user_info')
        router.replace('/login')

        dispatch({
            type:LOGOUT_SUCCESS,
            payload: data.data
        })
    }catch(errors){
        console.log(errors)
    }
}