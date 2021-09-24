import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RoomItem = ({ room }) => {
    
    return (
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            <div className="card p-2">
                    <Image src={!(room.image) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + room.image)} alt={room.room_name} height="210"
                    width="300" />

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        <Link href={`/room/${room.id}`}>
                            <a>{room.room_name}</a>
                        </Link>
                    </h5>

                    <div className="ratings mt-auto mb-3">
                        <p className="card-text"><b>${room.pricePerNight}</b> / night</p>

                        <div className="rating-outer">
                            <div
                                className="rating-inner"
                                style={{ width: `${(room.reviewAverage) * 10}%` }}
                            ></div>
                        </div>

                        <span id="no_of_reviews">({room.numOfReviews} Reviews)</span>
                    </div>

                    <button className="btn btn-block view-btn">
                        <Link href={`/room/${room.id}`}>View Details</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RoomItem
