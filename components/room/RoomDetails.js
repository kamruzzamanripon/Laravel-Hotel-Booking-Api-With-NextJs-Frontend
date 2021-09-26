import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {clearErrors} from '../../redux/actions/roomActions'
import  Head from 'next/head'
import Image from 'next/image'
import {Carousel} from 'react-bootstrap'

import ListofRivews from "../review/ListofRivews";
import RoomFeatures from "./RoomFeatures";

function RoomDetails() {

  const dispatch = useDispatch();
  const { room, error } = useSelector(state => state.roomDetails);
  const imageFileApi = JSON.parse(room.image); 
  //console.log(imageFileApi)
  return (
    <>
      <Head>
          <title>{room.room_name}</title>
      </Head>
      
      <div className="container container-fluid">
      <h2 className="mt-5">{room.room_name}</h2>
      <div className="ratings mt-auto mb-3">
        <div className="rating-outer">
          <div className="rating-inner" />
        </div>
        <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
      </div>
      
      <Carousel hover='pause'>
          {imageFileApi && imageFileApi.map((image, index) => (
              <Carousel.Item key={index}>
                  <div style={{ width: '100%', height: '440px' }}>
                  <Image src={process.env.ImagebaseUrl + image} alt={room.room_name} width="1200px" height="440px" />
                  </div>
              </Carousel.Item>
          ))}
      </Carousel>

      {/* <Image src={!(room.image) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + imageFileApi[0])} alt={room.room_name} width="300%" height="440px" />           */}

      <div className="row my-5">
        <div className="col-12 col-md-6 col-lg-8">
          <h3>Description</h3>
          <p>
            {room.description}
          </p>

          <RoomFeatures room={room} />
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <div className="booking-card shadow-lg p-4">
            <p className="price-per-night">
              <b>$ {room.pricePerNight}</b> / night
            </p>
            <button className="btn btn-block py-3 booking-btn">Pay</button>
          </div>
        </div>
      </div>
      <div className="reviews w-75">
        <h3>Reviews:</h3>
        <hr />
        
        {room.reviews && room.reviews.length > 0 ?
            // <ListofRivews reviews={room.reviews} />
            room.reviews.map((review,index)=>(
              <ListofRivews key={index} review={review} />
            ))
            :
            <p><b>No Reviews on this room</b></p>
        }
                
      </div>
    </div>
    </>
  );
}

export default RoomDetails;
