import axios_auth_header from '../../util/axios_auth_header'
import { 
    BOOKED_DATES_FAIL,
    BOOKED_DATES_SUCCESS,
    CHECK_BOOKING_FAIL, 
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_SUCCESS 
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

//Book Dates collection
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