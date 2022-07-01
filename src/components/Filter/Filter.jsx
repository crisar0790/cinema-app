import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import './Filter.css';
import { filterMovies } from '../../redux/actions';

function Filter({movies}) {

  const dispatch = useDispatch()
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const stars = [2, 4, 6, 8, 10];

  function handleRating(e) {
    if (rating !== e.target.value) {
      setRating(e.target.value);
      dispatch(filterMovies(e.target.value, movies));
    }
    if (rating === e.target.value) {
      setRating(null);
      dispatch(filterMovies(null, movies));
    }
  }

  return (
    <div className='filter__container'>
      <span>Filter by rating:</span>
      {
        stars.map((s, i) => {

          const ratingValue = s;

          return (
            <label key={i}>
              <input type="radio"
                name="rating"
                value={ratingValue}
                onClick={handleRating} />
              <FaStar className='star'
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                size={25} 
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)} />
            </label>
          )
        })
      }
    </div>
  )
}

export default Filter