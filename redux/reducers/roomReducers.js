import{
    ALL_ROOMS_SUCCESS,
    ALL_ROOMS_FAIL,
    ROOM_DETAILS_SUCCESS,
    ROOM_DETAILS_FAIL,
    
    CLEAR_ERRORS
} from '../constants/roomConstants'

//All Room Reducer
export const allRoomsReducer = (state={ rooms:[]}, action) =>{
    switch (action.type){
        case ALL_ROOMS_SUCCESS:
            return{
                ...state , rooms: action.payload
            }

        case ALL_ROOMS_FAIL:
            return{
                error: action.payload
            }  
            
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }   
            
        default: 
            return state    
    }
}

// Room details reducer
export const roomDetailsReducer = (state = { room: {} }, action) => {
    switch (action.type) {
        case ROOM_DETAILS_SUCCESS:
            return {
                room: action.payload
            }

        case ROOM_DETAILS_FAIL:
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
