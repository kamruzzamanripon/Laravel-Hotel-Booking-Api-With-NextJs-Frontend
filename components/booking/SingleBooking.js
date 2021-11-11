import React from 'react'
import {useSelector} from 'react-redux'
import Image from 'next/image'


function SingleBooking() {
    const {allBooking} = useSelector(state=> state.singleBooking)
    const imageParse = JSON.parse(allBooking.room.image)
    console.log(imageParse)
    return (
        <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 booking-details">
          <h2 className="my-5">Booking # {allBooking.id}</h2>

          <h4 className="mb-4">User Info</h4>
          <p><b>Name:</b> {allBooking.user.name}</p>
          <p><b>Email:</b> {allBooking.user.email}</p>
          <p><b>Amount:</b> $ {allBooking.room.pricePerNight*allBooking.daysOfStay}</p>

          <hr />

          <h4 className="mb-4">Booking Info</h4>
          <p><b>Check In:</b> {allBooking.checkInDate}</p>
          <p><b>Check Out:</b> {allBooking.checkOutDate}</p>
          <p><b>Days of Stay:</b> {allBooking.daysOfStay}</p>

          <hr />

          <h4 className="my-4">Payment Status</h4>
          <p className="greenColor"><b>Paid</b></p>

          <h4 className="mt-5 mb-4">Booked Room:</h4>

          <hr />
          <div className="cart-item my-1">
            <div className="row my-5">
              <div className="col-4 col-lg-2">
                 
                <Image src={!(allBooking.room.image) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + imageParse[0])} alt={allBooking.room.room_name} height="210"
                        width="300" />
              </div>

              <div className="col-5 col-lg-5">
                <a href="#">Room Name : {allBooking.room.room_name}</a>
              </div>

              <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                <p>$ {allBooking.room.pricePerNight}</p>
              </div>

              <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                <p>{allBooking.daysOfStay} Day(s)</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    )
}

export default SingleBooking
