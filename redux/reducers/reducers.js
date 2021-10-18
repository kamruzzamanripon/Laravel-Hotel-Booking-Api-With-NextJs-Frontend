import { combineReducers } from 'redux'
import {allRoomsReducer, roomDetailsReducer} from './roomReducers'
import {newUserReducer, loginReducer} from './authReducer'
import { checkBookingReducer, bookedDatesReducer } from './bookingReducers'


const reducer = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails:roomDetailsReducer,
    newUserInfo:newUserReducer,
    authInfo: loginReducer,
    checkBooking:checkBookingReducer,
    bookedDates: bookedDatesReducer,
})

export default reducer