import axios from 'axios'

import{
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    CLEAR_ERRORS
} from '../constants/roomConstants'

//Get all rooms
export const getRooms = ()=> async(dispatch)=>{
    try{
        const data = await axios.get('http://127.0.0.1:8000/api/v1/hotel/all-room')
        //console.log(data.data.data)
        dispatch({
            type: ALL_ROOMS_SUCCESS,
            payload: data.data.data
        })

    }catch(error){
        dispatch({
            type: ALL_ROOMS_FAIL,
            payload: error.response
        })
    }
}

//Clear Errors
export const clearErrors = ()=> async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}