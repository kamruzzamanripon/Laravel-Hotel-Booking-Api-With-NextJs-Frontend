import axios from 'axios'
axios.defaults.withCredentials = true


import{
    REGISTER_SUCCESS,
    LOGIN_SUCCESS,
    Auth_Error
} from '../constants/authConstants'



export const newUserAction = (userInfo, router)=> async(dispatch)=>{
    
    try{
        const data = await axios.post(`${process.env.baseUrl}/register`, userInfo)
        //console.log(data)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.data
        })
        await router.replace('/login')
    }catch(errors){
        //console.log(errors.response)
        dispatch({
            type: Auth_Error,
            payload: errors.response.data
        })
    }
}

export const loginAction = (loginData, router)=>async(dispatch)=>{
    try{
        
        const instance = axios.create({
            withCredentials: true, 
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'credentials': 'include'
            } 
          })
        //const data = await instance.post(`${process.env.baseUrl}/login`, loginData)
        
        // const data = await fetch(`http://127.0.0.1:8000/api/v1/hotel/login`,{
        //     method: 'POST',
        //     headers:{'Content-Type': 'application/json'},
        //     credentials: 'include',
        //     body:JSON.stringify(loginData)
        // })

        // const data = fetch(`${process.env.baseUrl}/login`, {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         credentials: 'include',
        //     },
        //     body: JSON.stringify(user)
        // })
        console.log(data)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data
        })
    }catch(errors){
        //console.log(errors.response)
        dispatch({
            type: Auth_Error,
            payload: errors.response.data
        })
    }
}