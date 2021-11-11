import axios_auth_header from '../../util/axios_auth_header'
import { 
    BOOKED_DATES_FAIL,
    BOOKED_DATES_SUCCESS,
    CHECK_BOOKING_FAIL, 
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_SUCCESS,
    BOOKING_ALL_DETAILS_SUCCESS, 
    BOOKING_SINGEL_DETAILS_SUCCESS,
    BOOKING_SINGEL_DETAILS_FAIL,
    
    BOOKING_ALL_DETAILS_FAIL, 
} from '../constants/bookingConstants';


//Check Room Available in specific Date
export const checkBooking = (id, checkin, checkout) => async (dispatch) => {
    try {
        
        dispatch({ type: CHECK_BOOKING_REQUEST });
        
        let link = `${process.env.baseUrl}/booking/?id=${id}&checkin=${checkin}&checkout=${checkout}`
        const data = await axios_auth_header().get(link)
        
        //console.log(data)

        dispatch({
            type: CHECK_BOOKING_SUCCESS,
            payload: data.data.data
        })

    } catch (error) {
        dispatch({
            type: CHECK_BOOKING_FAIL,
            payload: error.response
        })
    }
}

//Booked Dates collection
export const getBookedDates = (id) => async (dispatch) => {
    try {

        console.log("date collection")
        const data = await axios_auth_header().get(`${process.env.baseUrl}/booking-date/${id}`)
        
        //console.log(data)
        dispatch({
            type: BOOKED_DATES_SUCCESS,
            payload: data.data.data
        })

    } catch (error) {

        dispatch({
            type: BOOKED_DATES_FAIL,
            payload: error.response
        })
    }
}


//All Booking Record Show user's id Base
export const allBookingAction = (id, ctx) => async (dispatch) => {
    try {

        console.log("date collection")
        const data = await axios_auth_header(ctx).get(`${process.env.baseUrl}/booking/user-all-booking/${id}`)
        
        console.log(data.data)
        dispatch({
            type: BOOKING_ALL_DETAILS_SUCCESS,
            payload: data.data.data
        })

    } catch (error) {

        dispatch({
            type: BOOKING_ALL_DETAILS_FAIL,
            payload: error.response
        })
    }
}


//Booking Single Details user's id base
export const singleBookingAction = (id, ctx) => async (dispatch) => {
    try {

        console.log("date collection")
        const data = await axios_auth_header(ctx).get(`${process.env.baseUrl}/booking/single-booking/${id}`)
        
        console.log(data.data)
        dispatch({
            type: BOOKING_SINGEL_DETAILS_SUCCESS,
            payload: data.data.data[0]
        })

    } catch (error) {

        dispatch({
            type: BOOKING_SINGEL_DETAILS_FAIL,
            payload: error.response
        })
    }
}
