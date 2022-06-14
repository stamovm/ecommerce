import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Rating = (props) => {
  const { rating, numReviews } = props
  return (
    <div className="rating">
      {[...Array(5)].map((_, i) => {
        const starValue = i + 1
        return (
          <span>
            {rating >= starValue ? (
              <FontAwesomeIcon icon={faStar} />
            ) : rating >= starValue - 0.5 ? (
              <FontAwesomeIcon icon={faStarHalfAlt} />
            ) : (
              <FontAwesomeIcon icon={farFaStar} />
            )}
          </span>
        )
      })}
      <p>{numReviews} reviews</p>
    </div>
  )
}

export default Rating
