import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieReviewsById} from "../../../api.js";


const MovieReviews = () => {
  const {id} = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    getMovieReviewsById(id).then(review => {
      setReview(review);
    });

  }, [id])

  return (
    <>
      {review.length > 0
        ? review.map((review) => {
          return (
            <ul key={review.id}>
              <li className=" my-8">
                <span>{`Author: ${review.author}`}</span>
                <p className="mt-2">{review.content}</p>
              </li>
            </ul>
          )
        })
        : <span>We don't have any reviews for this movie.</span>
      }
    </>
  )
}

export default MovieReviews;