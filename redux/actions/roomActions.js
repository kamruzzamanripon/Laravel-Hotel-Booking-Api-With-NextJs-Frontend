import axios from 'axios'

import{
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,

    CLEAR_ERRORS
} from '../constants/roomConstants'

//Get all rooms
export const getRooms = ()=> async(dispatch)=>{
    try{
        const data = await axios.get(`${process.env.baseUrl}/all-room`)
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

//Get Room Details
export const getRoomDetails = (req, id)=> async(dispatch)=>{
    try{
        const data = await axios.get(`${process.env.baseUrl}/single-room/${id}`)
        //console.log(data.data.data)
        dispatch({
            type: ROOM_DETAILS_SUCCESS,
            payload: data.data.data
        })

    }catch(error){
        dispatch({
            type: ROOM_DETAILS_FAIL,
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