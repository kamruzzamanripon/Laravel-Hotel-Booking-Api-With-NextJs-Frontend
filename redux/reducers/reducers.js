import { combineReducers } from 'redux'
import {allRoomsReducer, roomDetailsReducer} from './roomReducers'
import {newUserReducer, loginReducer, profileReducer} from './authReducer'
import { checkBookingReducer, bookedDatesReducer, allBookingReducer, singleBookingReducer } from './bookingReducers'


const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails:roomDetailsReducer,
    newUserInfo:newUserReducer,
    authInfo: loginReducer,
    profile: profileReducer,
    checkBooking:checkBookingReducer,
    bookedDates: bookedDatesReducer,
    allBooking: allBookingReducer,
    singleBooking: singleBookingReducer,
})

export default reducer