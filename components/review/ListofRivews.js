import React from 'react'

function ListofRivews({review}) {
  
    return (
        <div className="review-card my-3">
          <div className="rating-outer">
          <div
            className="rating-inner"
            style={{ width: `${(review.rating/5) * 100}%` }}
          ></div>
          </div>
          <p className="review_user">by {review.user_id ? review.user.name : ""}</p>
          <p className="review_comment">{review.comment}</p>
          <hr />
        </div>
    )
}

export default ListofRivews
