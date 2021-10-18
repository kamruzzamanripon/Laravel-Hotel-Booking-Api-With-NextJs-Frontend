import axios_auth_header from '../../util/axios_auth_header'

import{
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,

    CLEAR_ERRORS
} from '../constants/roomConstants'



//Get all rooms
export const getRooms = (currentPage=1, location="", guests=1, category)=> async(dispatch)=>{
   
    try{
      
        //const data = await axios.get(`${process.env.baseUrl}/all-room/?page=${currentPage}&location=${location}&guests=${guests}&category=${category}`)
        
        let link = `${process.env.baseUrl}/all-room/?page=${currentPage}&location=${location}`
        if (guests) link = link.concat(`&guestCapacity=${guests}`)
        if (category) link = link.concat(`&category=${category}`)
        
        //console.log(link)
        //const data  = await axios.get(link)
        const data  = await axios_auth_header().get(link)

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
export const getRoomDetails = (req, id, ctx)=> async(dispatch)=>{
    try{
        
       const data = await axios_auth_header(ctx).get(`${process.env.baseUrl}/single-room/${id}`)

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