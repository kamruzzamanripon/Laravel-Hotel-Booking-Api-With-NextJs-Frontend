import { 
    BOOKED_DATES_FAIL,
    BOOKED_DATES_SUCCESS,
    CHECK_BOOKING_FAIL,
    CHECK_BOOKING_REQUEST, 
    CHECK_BOOKING_RESET, 
    CHECK_BOOKING_SUCCESS,
    BOOKING_ALL_DETAILS_SUCCESS, 
    BOOKING_ALL_DETAILS_FAIL,
    BOOKING_SINGEL_DETAILS_SUCCESS,
    BOOKING_SINGEL_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/bookingConstants"


//Check Room Available in specific Date
export const checkBookingReducer = (state = { available: null }, action) => {
    switch (action.type) {

        case CHECK_BOOKING_REQUEST:
            return {
                loading: true
            }

        case CHECK_BOOKING_SUCCESS:
            return {
                loading: false,
                available: action.payload
            }

        case CHECK_BOOKING_RESET:
            return {
                loading: false,
                available: null
            }

        case CHECK_BOOKING_FAIL:
            return {
                loading: false,
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



//Booked Dates collection
export const bookedDatesReducer = (state = { dates: [] }, action) => {
    switch (action.type) {
        case BOOKED_DATES_SUCCESS:
            return {
                loading: false,
                dates: action.payload
            }

        case BOOKED_DATES_FAIL:
            return {
                loading: false,
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


//All Booking Record Show user's id Base
export const allBookingReducer = (state = { dates: [] }, action) => {
    switch (action.type) {
        case BOOKING_ALL_DETAILS_SUCCESS:
            return {
                loading: true,
                allBooking: action.payload
            }

        case BOOKING_ALL_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}


//Booking Single Details user's id base
export const singleBookingReducer = (state = { dates: [] }, action) => {
    switch (action.type) {
        case BOOKING_SINGEL_DETAILS_SUCCESS:
            return {
                loading: true,
                allBooking: action.payload
            }

        case BOOKING_SINGEL_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}